<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    // REGISTER
    public function register(Request $request)
    {
        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|string|email|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'role'     => 'user',
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json([
            'access_token' => $token,
            'user' => $user
        ]);
    }

    // LOGIN
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        $user = JWTAuth::user(); // ✅ Merr user-in direkt nga token-i
        $refreshToken = JWTAuth::fromUser($user);

        return response()->json([
            'access_token'  => $token,
            'refresh_token' => $refreshToken,
            'user'          => $user
        ]);
    }

    // REFRESH TOKEN
    public function refresh()
    {
        try {
            $newToken = JWTAuth::parseToken()->refresh();
            return response()->json([
                'access_token' => $newToken
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Invalid refresh token'], 401);
        }
    }

    // USER INFO
    public function me()
    {
        $user = JWTAuth::parseToken()->authenticate(); // ✅ Kjo është më e sigurt
        return response()->json($user);
    }



    // LOGOUT
    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json(['message' => 'Logged out']);
    }
}