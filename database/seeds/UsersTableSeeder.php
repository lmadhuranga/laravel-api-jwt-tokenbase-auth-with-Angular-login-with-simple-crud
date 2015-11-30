<?php

use Illuminate\Database\Seeder;

// composer require laracasts/testdummy
use Laracasts\TestDummy\Factory as TestDummy;
use App\User;
class UsersTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker\Factory::create(); 
 
        User::create([                
            'name' => 'Madhuranga',
            'email' =>'madhuranga@openarc.lk',
            'password' =>bcrypt('hello1')
        ]);
        foreach(range(1,5) as $index)
        {
            User::create([                
                'name' => $faker->userName,
                'email' =>$faker->email,
                'password' =>bcrypt('secret')
            ]);
        }
    }
}
