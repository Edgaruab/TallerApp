<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{

 public function index(){
     return Product::paginate();
 }

 public function show($id){
     return Product::find($id);

 }

 public function create(Request $request){
    $Product = new Product();
    $Product->nombre =  $request->input('nombre');
    $Product->descrip = $request->input('descrip');
    $Product->save();
    return json_encode(['msg'=>'added']);
 }

 public function destroy($id){
    Product::destroy($id);
     return json_encode(["msg"=>"removed"]);
 }

 public function edit(Request $request, $id){
    $id =  $request->input('id');
    $nombre =  $request->input('nombre');
    $descrip = $request->input('descrip');
    Product::where('id', $id)->update(
      ['id'=>$id,
       'nombre'=>$nombre,
       'descrip'=>$descrip]
    );
     return json_encode(["msg"=>"edited"]);
 }

}
