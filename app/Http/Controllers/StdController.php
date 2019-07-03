<?php

namespace App\Http\Controllers;

use App\Http\Resources\Std as StdResource;
use App\Http\Resources\StdCollection;
use App\Std;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator;
use Response;

class StdController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return StdResource::collection(Std::all());

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'name' => 'required|unique:stds',

        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $class=new Std();
        $class->name=$request->name;
        if($class->save()){
            return response()->json([
                'success' => true,

            ], 200);
        }
        else{
            return response()->json(
                [
                    'success'=>'false',

                ],500
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Std  $std
     * @return \Illuminate\Http\Response
     */
    public function show(Std $std)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Std  $std
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,$std)
    {
        $validator = Validator::make($request->all(), [

            'name' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $class=Std::findOrFail($std);
        $class->name=$request->name;
        if($class->update()){
            return response()->json([
                'success' => true,

            ], 200);
        }
        else{
            return response()->json(
                [
                    'success'=>'false',

                ],500
            );
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Std  $std
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Std $std)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Std  $std
     * @return \Illuminate\Http\Response
     */

        public function destroy(Request $request)
    {
        if(Std::destroy($request->id)){
            return response()->json([
                'success' =>true,

            ], 200);
        }
        else{
            return response()->json(
                [
                    'success'=>'false',

                ],500
            );
        }

        // redirect or whatever...
    }

}
