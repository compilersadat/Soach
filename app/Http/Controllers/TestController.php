<?php

namespace App\Http\Controllers;

use App\Exam;
use App\Http\Resources\ExamResource;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator;
use Response;
class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ExamResource::collection(Exam::all());
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

            'name' => 'required|unique:exams',

        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $class=new Exam();
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
     * @param  \App\Exam  $exam
     * @return \Illuminate\Http\Response
     */
    public function show(Exam $exam)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Exam  $exam
     * @return \Illuminate\Http\Response
     */
    public function edit(Exam $exam)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Exam  $exam
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Exam $exam)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Exam  $exam
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        if(Exam::destroy($request->id)){
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
