<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\Users;
class UsersControlle extends Controller
{
    public function getAll(){
        $data = Users::get();
        return response()->json($data, 200);
      }

      public function create(Request $request){
       $data['username'] = $request['username'];
        $data['password'] = $request['password'];
        $data['firstName'] = $request['firstName'];
        $data['lastName'] = $request['lastName'];
        Users::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);

    /*   $userss = new Users();
        $userss->username =  $request->input('username');
        $userss->password = $request->input('password');
        $userss->firstName =  $request->input('firstName');
        $userss->lastName = $request->input('lastName');
        $userss->save();
        return json_encode(['msg'=>'added']);
*/
      }

      public function delete($id){
        $res = Users::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }

      public function get($id){
        $data = Users::find($id);
        return response()->json($data, 200);
      }

      public function update(Request $request,$id){
        $data['username'] = $request['username'];
        $data['password'] = $request['password'];
        $data['firstName'] = $request['firstName'];
        $data['lastName'] = $request['lastName'];
        Users::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }

      public function authenticate($username)
      {
       // return Users::find($username);
        $data = Users::find($username);
        return response()->json($data, 200);


      }
  }

