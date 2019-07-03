<?php

namespace App\Http\Controllers;

use App\Http\Resources\Std;
use App\Parents;
use App\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator;
use Response;
class RegistrationController extends Controller
{
    public function parentRegister(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:parents',
            'name' => 'required',
            'password' => 'required|string|min:8'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $parent=new Parents();
        $parent->name=$request->name;
        $parent->email=$request->email;
        $parent->password=Hash::make($request->password);
        if($parent->save()){
            return response()->json([
                'success' => true,
                'data' => $parent
            ], 200);
        }
        else{
            return response()->json(
                [
                    'success'=>false,

                ],500
            );
        }
    }
    public function studentRegister(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:students',
            'password' => 'required|string|min:8'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $parent=new Student();
        $parent->name=$request->name;
        $parent->parent_id=$request->parentId;
        $parent->password=Hash::make($request->password);
        if($parent->save()){
            return response()->json([
                'success' => true,

            ], 200);
        }
        else{
            return response()->json(
                [
                    'success'=>false,

                ],500
            );
        }
    
    }
}
