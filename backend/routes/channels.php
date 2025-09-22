<?php

use Illuminate\Support\Facades\Broadcast;


Broadcast::routes([
    'middleware' => ['auth:api'],
]);

// Lejo vetëm user-in me atë ID të lidhet në kanalin e vet
Broadcast::channel('user.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
