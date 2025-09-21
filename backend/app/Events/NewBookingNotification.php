<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewBookingNotification implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;

    /**
     * Konstruktori merr mesazhin që duam ta dërgojmë
     */
    public function __construct($message)
    {
        $this->message = $message;
    }

    /**
     * Kanali ku do transmetohet eventi
     */
    public function broadcastOn()
    {
        return new Channel('travel-website-channel');
    }

    /**
     * Emri i eventit që frontend do ta dëgjojë
     */
    public function broadcastAs()
    {
        return 'new-booking';
    }
}
