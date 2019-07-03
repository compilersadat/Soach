<?php

namespace App\Http\Controllers;

use App\Question;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator;
use Response;
use App\Http\Resources\QuestionResource;
class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return QuestionResource::collection(Question::all());
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
            'subject_id'=>'required',
            'class_id'=>'required',
            'test_id'=>'required',
            'title' => 'required|unique:questions',
            'a'=>'required',
            'b'=>'required',
            'c'=>'required',
            'd'=>'required',
            'ans'=>'required'

        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $qtn=new Question();
        $qtn->subject_id=$request->subject_id;
        $qtn->std_id=$request->class_id;
        $qtn->test_id=$request->test_id;
        $qtn->title=$request->title;
        $qtn->a=$request->a;
        $qtn->b=$request->b;
        $qtn->c=$request->c;
        $qtn->d=$request->d;
        $qtn->ans=$request->ans;
        if($qtn->save()){
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
     * @param  \App\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function edit(Question $question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $question)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        if(Question::destroy($request->id)){
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
