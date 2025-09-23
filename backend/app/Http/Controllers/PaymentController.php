<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;
use Illuminate\Support\Facades\Auth;
use App\Models\Notification;
use App\Events\NewBookingNotification;

class PaymentController extends Controller
{
    public function createPaymentIntent(Request $request)
    {
        try {
            Stripe::setApiKey(env('STRIPE_SECRET'));

            $amount = $request->input('amount', 1000); // default $10
            $currency = $request->input('currency', 'usd');

            $paymentIntent = PaymentIntent::create([
                'amount' => $amount,
                'currency' => $currency,
                'payment_method_types' => ['card'],
            ]);

            return response()->json([
                'clientSecret' => $paymentIntent->client_secret,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Konfirmo pagesën dhe dërgo njoftim real-time
     */
    public function confirmPayment(Request $request)
    {
        try {
            $paymentId = $request->input('payment_id');
            $amount = $request->input('amount');
            $bookingId = $request->input('booking_id'); 

            // ✅ Ruaj njoftim në DB
            Notification::create([
                'user_id' => Auth::id(),
                'type' => 'payment_success',
                'message' => "Your payment of $" . number_format($amount / 100, 2) . " was successful!",
                'data' => [
                    'payment_id' => $paymentId,
                    'booking_id' => $bookingId,
                ],
            ]);

            // 🔔 Dërgo event real-time me Pusher/Laravel Echo
            event(new NewBookingNotification(
                (int) Auth::id(),
                "Your payment of $" . number_format($amount / 100, 2) . " was successful!"
            ));

            return response()->json(['message' => 'Payment confirmed and notification sent']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
