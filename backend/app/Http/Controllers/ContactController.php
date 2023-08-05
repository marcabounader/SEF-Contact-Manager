<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    public function addContact(Request $request){
        try{
            $contact= new Contact;
            $contact->user_id=Auth::id();
            $contact->name=$request->name;
            $contact->phone_number=$request->phone_number;
            $contact->latitude=$request->latitude;
            $contact->longitude=$request->longitude;
            $contact->save();
            return response()->json([
                'status' => "success"
            ]);
        } catch(Exception $e){
            return response()->json([
                'status' => "failed",
                'error'=>'Message'.$e->getMessage()
            ]);        
        }
    }

    public function getContacts(Request $request){
        try{
            $user=Auth::user();
            $contacts=$user->contacts;
            return response()->json([
                'status' => "success",
                'contacts' => $contacts
            ]);        ;
        } catch(Exception $e){
            return response()->json([
                'status' => "failed",
                'error'=>'Message'.$e->getMessage()
            ]);        
        }
    }

    public function removeContact(Request $request,$contact_id){
        try{
            $user_id=Auth::id();
            $contact_id=$request->contact_id;
            Contact::where([['id',$contact_id],['user_id',$user_id]])->delete();
            return response()->json([
                'status' => "success",
            ]);        
        } catch(Exception $e){
            return response()->json([
                'status' => "failed",
                'error'=>'Message'.$e->getMessage()
            ]);        
        }
    }
}
