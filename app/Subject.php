<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    public function std()
    {
        return $this->belongsTo('App\Std');
    }
}
