<?php

namespace App\Events;

use Illuminate\Broadcasting\PrivateChannel;   
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewBookingNotification implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public int $userId;
    public string $message;

    public function __construct(int $userId, string $message)
    {
        $this->userId  = $userId;
        $this->message = $message;
    }

    // dërgo tek kanali privat i user-it
    public function broadcastOn()
    {
        return new PrivateChannel('user.' . $this->userId);
    }

    // emri i eventit që do dëgjojë frontend-i
    public function broadcastAs()
    {
        return 'new-booking';
    }

    // payload që do marrë frontend-i
    public function broadcastWith(): array
    {
        return [
            'message' => $this->message,
            'user_id' => $this->userId,
        ];
    }
}
