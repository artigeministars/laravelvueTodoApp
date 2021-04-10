<?php

namespace Modules\Todos\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Todos extends Model
{
    use HasFactory;

    protected $fillable = [
        'text',
        'status'
    ];
    protected $table = 'todos';

    protected static function newFactory()
    {
        return \Modules\Todos\Database\factories\TodosFactory::new();
    }
}
