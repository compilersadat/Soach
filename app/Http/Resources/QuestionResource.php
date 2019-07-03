<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'subject'=>$this->subject->name,
            'class'=>$this->std->name,
            'test'=>$this->test->name,
            'title'=>$this->title,
            'option_a'=>$this->a,
            'option_b'=>$this->b,
            'option_c'=>$this->c,
            'option_d'=>$this->d,
            'ans'=>$this->ans,


        ];
    }
}
