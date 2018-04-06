<?php
namespace Guni\Weather;

use \Guni\User\ActiveRecordModel;

/**
 * A database driven model.
 */
class Weather extends ActiveRecordModel
{
    /**
     * @var string $tableName name of the database table.
     */
    protected $tableName = "hours";


    /**
     * Columns in the table.
     *
     * @var integer $id primary key auto incremented.
     */
    public $date;
    public $hour0;
    public $hour1;
    public $hour2;
    public $hour3;
    public $hour4;
    public $hour5;
    public $hour6;
    public $hour7;
    public $hour8;
    public $hour9;
    public $hour10;
    public $hour11;
    public $hour12;
    public $hour13;
    public $hour14;
    public $hour15;
    public $hour16;
    public $hour17;
    public $hour18;
    public $hour19;
    public $hour20;
    public $hour21;
    public $hour22;
    public $hour23;
}
