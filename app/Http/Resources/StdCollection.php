<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Std;
use App\Http\Resources\Std as StdResource;
class StdCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $this->collection->transform(
            function (Std $std) {

                return (new StdResource($std));
            });

        return parent::toArray($request);
    }
}
