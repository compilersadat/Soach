<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Std extends Model
{
    public function subjects()
    {
        return $this->hasMany(Subject::class);
    }
}
