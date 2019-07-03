<?php

namespace App\Http\Controllers;

use App\Http\Resources\Subject as SubSresource;
use App\Subject;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator;
use Response;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return SubSresource::collection(Subject::all());
    }
public  function getByClass(Request $request){
    return  SubSresource::collection(Subject::where('std_id',$request->id)->get());
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

            'name' => 'required',
            'std_id'=>'required'

        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $subject=new Subject();
        $subject->name=$request->name;
        $subject->std_id=$request->std_id;
        if($subject->save()){
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
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function show(Subject $subject)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,$id)
    {
        $validator = Validator::make($request->all(), [

            'name' => 'required',
            'std_id'=>'required'

        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $subject=Subject::findOrFail($id);
        $subject->name=$request->name;
        $subject->std_id=$request->std_id;
        if($subject->update()){
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
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subject $subject)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        if(Subject::destroy($request->id)){
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
