<?php

namespace App\Http\Resources;
use App\Http\Resources\Std as StdRes;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Std;
class Subject extends JsonResource
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
            'name'=>$this->name,
            'std_id'=>$this->std_id,
            'class_name'=>$this->std->name
        ];
    }
}
