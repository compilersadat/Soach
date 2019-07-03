<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    public function subject(){
        return $this->belongsTo('App\Subject','subject_id','id');
    }
    public function std(){
        return $this->belongsTo('App\Std','std_id','id');
    }
    public function test(){
        return $this->belongsTo('App\Exam','test_id','id');
    }
}
