function formValidation(){

    //checkbox      
      if(!this.ucuForm.pic.checked && !this.ucuForm.f138.checked && !this.ucuForm.tc.checked && !this.ucuForm.gmc.checked && !this.ucuForm.nso.checked && !this.ucuForm.bc.checked && !this.ucuForm.form137.checked && !this.ucuForm.otr.checked){
        document.getElementById('errorRequirements').innerHTML = "<i>* Please check atleast one Requirements</i>";
      }else{
        document.getElementById('errorRequirements').innerHTML = "";
      }


      


  //radio for yes no choice
      let choice = document.forms['ucuForm']['choice'].value; // gets the value of textBox

      if(choice == ""){
        document.getElementById('errorChoice').innerHTML = "<i>* Please Choice Yes/No</i>";
      }else{
        document.getElementById('errorChoice').innerHTML = "";
      }

      //radio for yes no choice2
      let choice2 = document.forms['ucuForm']['choice2'].value; // gets the value of textBox

      if(choice == ""){
        document.getElementById('errorChoice2').innerHTML = "<i>* Please Choice Yes/No</i>";
      }else{
        document.getElementById('errorChoice2').innerHTML = "";
      }


//radio for yes no choice3
      let choice3 = document.forms['ucuForm']['choice3'].value; // gets the value of textBox

      if(choice3 == ""){
        document.getElementById('errorChoice3').innerHTML = "<i>* Please Choice Yes/No</i>";
      }else{
        document.getElementById('errorChoice3').innerHTML = "";
      }

      //radio application for
      let sem = document.forms['ucuForm']['sem'].value; // gets the value of textBox

      if(sem == ""){
        document.getElementById('errorSem').innerHTML = "<i>* Please select semester</i>";
      }else{
        document.getElementById('errorSem').innerHTML = "";
      }

 //select & option date of birth
      let selectmonth = document.forms['ucuForm']['selectmonth'].value; // gets the value of textBox

      if(selectmonth == "month1"){
        document.getElementById('errormonth').innerHTML = "<i>* Please select month!</i>";
      }else{
        document.getElementById('errormonth').innerHTML = "";
      }
//select & option date of birth
      let selectdays = document.forms['ucuForm']['selectdays'].value;
      if(selectdays == "days1"){
        document.getElementById('errordays').innerHTML = "<i>* Please select days!</i>";
      }else{
        document.getElementById('errordays').innerHTML = "";
      }
//select & option date of birth
      let years1 = document.forms['ucuForm']['years1'].value;
      if(years1 == "years1"){
        document.getElementById('erroryears').innerHTML = "<i>* Please select years!</i>";
      }else{
        document.getElementById('erroryears').innerHTML = "";
      }

//select admission
      let admission = document.forms['ucuForm']['admission'].value; // gets the value of textBox

      if(admission  == "Select"){
        document.getElementById('eadmission').innerHTML = "<i>* Please select Admission!</i>";
      }else{
        document.getElementById('eadmission').innerHTML = "";
      }

      //radio for gender
      let gender = document.forms['ucuForm']['gender'].value;
      if(gender == ""){
        document.getElementById('errorgender').innerHTML = "<i>* Please select gender</i>";
      }else{
        document.getElementById('errorgender').innerHTML = "";
      }


      //radio for status
      let status = document.forms['ucuForm']['status'].value;
      if(status == ""){
        document.getElementById('errorstatus').innerHTML = "<i>* Please select status </i>";
      }else{
        document.getElementById('errorstatus').innerHTML = "";
      }


      //radio for Bro/Sis studying here
      let relative = document.forms['ucuForm']['relative'].value;
      if(relative == ""){
    
        document.getElementById('errorrelative').innerHTML = "<i>* Please Choice Yes/No </i>";
      }else{
        document.getElementById('errorrelative').innerHTML = "";
      }
      //radio for source
      let source = document.forms['ucuForm']['source'].value;
      if(source == ""){
     
        document.getElementById('errorsource').innerHTML = "<i>* Please select your choice </i>";
      }else{
        document.getElementById('errorsource').innerHTML = "";
      }

      //select & option date of birth
      let month2 = document.forms['ucuForm']['month2'].value; // gets the value of textBox

      if(month2 == "month"){
        document.getElementById('emonth').innerHTML = "<i>* Please select month!</i>";
      }else{
        document.getElementById('emonth').innerHTML = "";
      }
      
      let days2 = document.forms['ucuForm']['days2'].value;
      if(days2 == "days"){
        document.getElementById('edays').innerHTML = "<i>* Please select days!</i>";
      }else{
        document.getElementById('edays').innerHTML = "";
      }
      let years2 = document.forms['ucuForm']['years2'].value;
      if(years2 == "years"){
        document.getElementById('eyears').innerHTML = "<i>* Please select years!</i>";
      }else{
        document.getElementById('eyears').innerHTML = "";
      }

       //select & option date of birth for married
      let month3 = document.forms['ucuForm']['month3'].value; // gets the value of textBox

      if(month3 == "month"){
        document.getElementById('emonth1').innerHTML = "<i>* Please select month!</i>";
      }else{
        document.getElementById('emonth1').innerHTML = "";
      }
      
      let days3 = document.forms['ucuForm']['days3'].value;
      if(days3 == "days"){
        document.getElementById('edays1').innerHTML = "<i>* Please select days!</i>";
      }else{
        document.getElementById('edays1').innerHTML = "";
      }
      let years3 = document.forms['ucuForm']['years2'].value;
      if(years3 == "years"){
        document.getElementById('eyears1').innerHTML = "<i>* Please select years!</i>";
      }else{
        document.getElementById('eyears1').innerHTML = "";
      }


      //select & option date of birth for married
      let month4 = document.forms['ucuForm']['month4'].value; // gets the value of textBox

      if(month4 == "month"){
        document.getElementById('emonth4').innerHTML = "<i>* Please select month!</i>";
      }else{
        document.getElementById('emonth4').innerHTML = "";
      }
      
      let days4 = document.forms['ucuForm']['days4'].value;
      if(days4 == "days"){
        document.getElementById('edays4').innerHTML = "<i>* Please select days!</i>";
      }else{
        document.getElementById('edays4').innerHTML = "";
      }
      let years4 = document.forms['ucuForm']['years4'].value;
      if(years4 == "years"){
        document.getElementById('eyears4').innerHTML = "<i>* Please select years!</i>";
      }else{
        document.getElementById('eyears4').innerHTML = "";
      }



}
      //-------------------------------------------------------------------------------
     

        function a(){
      //textbox firstName
      let letters = /^[A-Za-z ]+$/;
      if(document.forms['ucuForm']['Lastname'].value.trim() == ""){
          document.getElementById('errorLastname').innerHTML = "<i>*Please enter your Last name!</i>";
          document.getElementById('errorLastname').style.color = "red";
          document.getElementById('Lastname').style.border = "solid thin red";
       }else{
      if(document.forms['ucuForm']['Lastname'].value.trim().match(letters)){            
        document.getElementById('errorLastname').innerHTML = "";
        document.getElementById('Lastname').style.border = "solid 1px green";
        document.getElementById('errorLastname').style.color = "green";
            document.getElementById('errorLastname').innerHTML = "<i></i>";                      
      }else{
        document.getElementById('errorLastname').innerHTML = "<i>* Please enter your Last Name Correctly!</i>";
        document.getElementById('errorLastname').style.color = "red";
        document.getElementById('Lastname').style.border = "solid 1px red";
        document.getElementById('Lastname').focus();
    
      }
    }
        let a = /^[A-Za-z ]+$/;
      if(document.forms['ucuForm']['fname'].value.trim() == ""){
          document.getElementById('errorfname').innerHTML = "<i>*Please enter your First name!</i>";
          document.getElementById('errorfname').style.color = "red";
          document.getElementById('fname').style.border = "solid thin red";
       }else{
      let fname = document.forms['ucuForm']['fname'].value;      
      if(document.forms['ucuForm']['fname'].value.trim().match(a)){         
        document.getElementById('errorfname').innerHTML = "";
        document.getElementById('fname').style.border = "solid 1px green";
          
      }else{        
           document.getElementById('errorfname').innerHTML = "<i>* Please enter your First Name Correctly!</i>";
        document.getElementById('errorfname').style.color = "red";
        document.getElementById('fname').style.border = "solid 1px red";
        document.getElementById('fname').focus();            
      }
    }


      
        let b = /^[A-Za-z ]+$/;
        if(document.forms['ucuForm']['mname'].value.trim() == ""){
          document.getElementById('errormname').innerHTML = "<i>*Please enter your Middle name!</i>";
          document.getElementById('errormname').style.color = "red";
          document.getElementById('mname').style.border = "solid thin red";
       }else{
      let mname = document.forms['ucuForm']['mname'].value;      
      if(document.forms['ucuForm']['mname'].value.trim().match(b)){       
        document.getElementById('errormname').innerHTML = "";
        document.getElementById('mname').style.border = "solid 1px green";
           
      }else{     
      document.getElementById('errormname').innerHTML = "<i>* Please enter your Middle Name Correctly!</i>";
        document.getElementById('errormname').style.color = "red";
        document.getElementById('mname').style.border = "solid 1px red";
        document.getElementById('mname').focus();   
                       
      }
    }
      
         let c = /^[A-Za-z ]+$/;
        if(document.forms['ucuForm']['pb'].value.trim() == ""){
          document.getElementById('errorpb').innerHTML = "<i>*Please enter your Place of Birth</i>";
          document.getElementById('errorpb').style.color = "red";
          document.getElementById('pb').style.border = "solid thin red";
       }else{
      let pb = document.forms['ucuForm']['pb'].value;      
      if(document.forms['ucuForm']['pb'].value.trim().match(c)){      
        document.getElementById('errorpb').innerHTML = "";
        document.getElementById('pb').style.border = "solid 1px green"; 
      }else{ 

          document.getElementById('errorpb').innerHTML = "<i>* Please enter your Place of Birth Correctly!</i>";
        document.getElementById('errorpb').style.color = "red";
        document.getElementById('pb').style.border = "solid 1px red";
        document.getElementById('pb').focus();
                      
      }
        }
      
        let d = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['addapart1'].value.trim() == ""){
          document.getElementById('erroraddapart1').innerHTML = "<i>*Please enter your Appartment, Building, etc.</i>";
          document.getElementById('erroraddapart1').style.color = "red";
          document.getElementById('addapart1').style.border = "solid thin red";
       }else{
      let addapart1 = document.forms['ucuForm']['addapart1'].value;  
      if(document.forms['ucuForm']['addapart1'].value.trim().match(d)){       
       document.getElementById('erroraddapart1').innerHTML = "";
        document.getElementById('addapart1').style.border = "solid 1px green";   
         
      }else{        
               document.getElementById('erroraddapart1').innerHTML = "<i>* Please enter your Appartment, Building, etc. Correctly!</i>";
        document.getElementById('erroraddapart1').style.color = "red";
        document.getElementById('addapart1').style.border = "solid 1px red";
        document.getElementById('addapart1').focus();      
      }
    }

      
        let e = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['addstreet1'].value.trim() == ""){
          document.getElementById('erroraddstreet1').innerHTML = "<i>*Please enter your Street Address</i>";
          document.getElementById('erroraddstreet1').style.color = "red";
          document.getElementById('addstreet1').style.border = "solid thin red";
       }else{
      let addstreet1 = document.forms['ucuForm']['addstreet1'].value;      
       if(document.forms['ucuForm']['addstreet1'].value.trim().match(e)){          
         document.getElementById('erroraddstreet1').innerHTML = "";
        document.getElementById('addstreet1').style.border = "solid 1px green";
      }else{        
           document.getElementById('erroraddstreet1').innerHTML = "<i>* Please enter your Street Address Correctly!</i>";
        document.getElementById('erroraddstreet1').style.color = "red";
        document.getElementById('addstreet1').style.border = "solid 1px red";
        document.getElementById('addstreet1').focus();            
      }
      }
      
    let f = /^[A-Za-z]+$/;
      if(document.forms['ucuForm']['addcity1'].value.trim() == ""){
          document.getElementById('erroraddcity1').innerHTML = "<i>*Please enter your City Address</i>";
          document.getElementById('erroraddcity1').style.color = "red";
          document.getElementById('addcity1').style.border = "solid thin red";
       }else{
      let addcity1 = document.forms['ucuForm']['addcity1'].value;      
      if(document.forms['ucuForm']['addcity1'].value.trim().match(f)){        
       document.getElementById('erroraddcity1').innerHTML = "";
        document.getElementById('addcity1').style.border = "solid 1px green";  
      }else{        
           document.getElementById('erroraddcity1').innerHTML = "<i>* Please enter your City Address Correctly!</i>";
        document.getElementById('erroraddcity1').style.color = "red";
        document.getElementById('addcity1').style.border = "solid 1px red";
        document.getElementById('addcity1').focus();           
      }
    }


      
        let g = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['addprov1'].value.trim() == ""){
          document.getElementById('erroraddprov1').innerHTML = "<i>*Please enter your Province/Region</i>";
          document.getElementById('erroraddprov1').style.color = "red";
          document.getElementById('addprov1').style.border = "solid thin red";
       }else{
      let addprov1 = document.forms['ucuForm']['addprov1'].value;      
      if(document.forms['ucuForm']['addprov1'].value.trim().match(g)){          
        document.getElementById('erroraddprov1').innerHTML = "";
        document.getElementById('addprov1').style.border = "solid 1px green";   
            
      }else{        
         document.getElementById('erroraddprov1').innerHTML = "<i>* Please enter your Province/Region Correctly!</i>";
        document.getElementById('erroraddprov1').style.color = "red";
        document.getElementById('addprov1').style.border = "solid 1px red";
        document.getElementById('addprov1').focus();    
      }
    }

        
       let email = document.forms['ucuForm']['email'].value;      
      if(email.trim() == ""){        
        document.getElementById('erroremail').innerHTML = "<i>* Please enter your Email Address</i>";
        document.getElementById('erroremail').style.color = "red";
        document.getElementById('email').style.border = "solid 1px red";
        document.getElementById('email').focus();
            
      }else{        
        document.getElementById('erroremail').innerHTML = "";
        document.getElementById('email').style.border = "solid 1px green";               
      }
      let h = /^[A-Za-z]+$/;
      if(document.forms['ucuForm']['guardian'].value.trim() == ""){
          document.getElementById('errorguardian').innerHTML = "<i>*Please enter your Guardian Name</i>";
          document.getElementById('errorguardian').style.color = "red";
          document.getElementById('guardian').style.border = "solid thin red";
       }else{
       let guardian = document.forms['ucuForm']['guardian'].value;      
      if(document.forms['ucuForm']['addprov1'].value.trim().match(h)){     
         document.getElementById('errorguardian').innerHTML = "";
        document.getElementById('guardian').style.border = "solid 1px green";
            
      }else{        
            document.getElementById('errorguardian').innerHTML = "<i>* Please enter your Guardian Name Correctly!</i>";
        document.getElementById('errorguardian').style.color = "red";
        document.getElementById('guardian').style.border = "solid 1px red";
        document.getElementById('guardian').focus();          
      }
    }

      
        let i = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['nameofsch'].value.trim() == ""){
          document.getElementById('errornameofsch').innerHTML = "<i>*Please enter Name of School</i>";
          document.getElementById('errornameofsch').style.color = "red";
          document.getElementById('nameofsch').style.border = "solid thin red";
       }else{
       let nameofsch = document.forms['ucuForm']['nameofsch'].value;      
      if(document.forms['ucuForm']['nameofsch'].value.trim().match(i)){         
        document.getElementById('errornameofsch').innerHTML = "";
        document.getElementById('nameofsch').style.border = "solid 1px green"; 

      }else{        
                        
        document.getElementById('errornameofsch').innerHTML = "<i>* Please enter Name of School Correctly!</i>";
        document.getElementById('errornameofsch').style.color = "red";
        document.getElementById('nameofsch').style.border = "solid 1px red";
        document.getElementById('nameofsch').focus();          
      }
    }


        
      let j = /^[A-Za-z]+$/;

      if(document.forms['ucuForm']['schadd'].value.trim() == ""){
          document.getElementById('errorschadd').innerHTML = "<i>*Please enter School Address</i>";
          document.getElementById('errorschadd').style.color = "red";
          document.getElementById('schadd').style.border = "solid thin red";
       }else{
       let schadd = document.forms['ucuForm']['schadd'].value;      
      if(document.forms['ucuForm']['schadd'].value.trim().match(j)){         
        
            document.getElementById('errorschadd').innerHTML = "";
        document.getElementById('schadd').style.border = "solid 1px green";   
      }else{        
           document.getElementById('errorschadd').innerHTML = "<i>* Please enter School Address Correctly!</i>";
        document.getElementById('errorschadd').style.color = "red";
        document.getElementById('schadd').style.border = "solid 1px red";
        document.getElementById('schadd').focus();          
      }
    }


      
        let k = /^[A-Za-z]+$/;

        if(document.forms['ucuForm']['fchoice'].value.trim() == ""){
          document.getElementById('errorfchoice').innerHTML = "<i>*Please enter your First Choice</i>";
          document.getElementById('errorfchoice').style.color = "red";
          document.getElementById('fchoice').style.border = "solid thin red";
       }else{
       let fchoice = document.forms['ucuForm']['fchoice'].value;      
      if(document.forms['ucuForm']['fchoice'].value.trim().match(k)){        
        document.getElementById('errorfchoice').innerHTML = "";
        document.getElementById('fchoice').style.border = "solid 1px green";  
            
      }else{        
              document.getElementById('errorfchoice').innerHTML = "<i>* Please enter your First Choice Correctly!</i>";
        document.getElementById('errorfchoice').style.color = "red";
        document.getElementById('fchoice').style.border = "solid 1px red";
        document.getElementById('fchoice').focus();         
      }
    }

      
         let l = /^[A-Za-z]+$/;
          if(document.forms['ucuForm']['fmajor'].value.trim() == ""){
          document.getElementById('errorfmajor').innerHTML = "<i>*Please enter your Major </i>";
          document.getElementById('errorfmajor').style.color = "red";
          document.getElementById('fmajor').style.border = "solid thin red";
       }else{
      let fmajor = document.forms['ucuForm']['fmajor'].value;      
      if(document.forms['ucuForm']['fmajor'].value.trim().match(l)){       
         document.getElementById('errorfmajor').innerHTML = "";
        document.getElementById('fmajor').style.border = "solid 1px green";
            
      }else{        
          document.getElementById('errorfmajor').innerHTML = "<i>* Please enter your Major Correctly!</i>";
        document.getElementById('errorfmajor').style.color = "red";
        document.getElementById('fmajor').style.border = "solid 1px red";
        document.getElementById('fmajor').focus();            
      }
      }
      
        let m = /^[A-Za-z]+$/;

        if(document.forms['ucuForm']['schoice'].value.trim() == ""){
          document.getElementById('errorschoice').innerHTML = "<i>*Please enter your Second Choice </i>";
          document.getElementById('errorschoice').style.color = "red";
          document.getElementById('schoice').style.border = "solid thin red";
       }else{
      let schoice = document.forms['ucuForm']['schoice'].value;      
      if(document.forms['ucuForm']['schoice'].value.trim().match(m)){         
         document.getElementById('errorschoice').innerHTML = "";
        document.getElementById('schoice').style.border = "solid 1px green";  

      }else{        
           document.getElementById('errorschoice').innerHTML = "<i>* Please enter your Second Choice Correctly!</i>";
        document.getElementById('errorschoice').style.color = "red";
        document.getElementById('schoice').style.border = "solid 1px red";
        document.getElementById('schoice').focus();
       }              
      }

      
        let n = /^[A-Za-z]+$/;
         if(document.forms['ucuForm']['smajor'].value.trim() == ""){
          document.getElementById('errorsmajor').innerHTML = "<i>*Please enter your Major</i>";
          document.getElementById('errorsmajor').style.color = "red";
          document.getElementById('smajor').style.border = "solid thin red";
       }else{
      let smajor = document.forms['ucuForm']['smajor'].value;      
      if(document.forms['ucuForm']['smajor'].value.trim().match(n)){      
        document.getElementById('errorsmajor').innerHTML = "";
        document.getElementById('smajor').style.border = "solid 1px green"; 
            
      }else{        
               document.getElementById('errorsmajor').innerHTML = "<i>* Please enter your Major Correctly!</i>";
        document.getElementById('errorsmajor').style.color = "red";
        document.getElementById('smajor').style.border = "solid 1px red";
        document.getElementById('smajor').focus();
       }
      }


      
      let o = /^[A-Za-z]+$/;

      if(document.forms['ucuForm']['cchoice'].value.trim() == ""){
          document.getElementById('errorcchoice').innerHTML = "<i>*Please enter your Current Choice</i>";
          document.getElementById('errorcchoice').style.color = "red";
          document.getElementById('cchoice').style.border = "solid thin red";
       }else{
       let cchoice = document.forms['ucuForm']['cchoice'].value;      
      if(document.forms['ucuForm']['cchoice'].value.trim().match(o)){          
        document.getElementById('errorcchoice').innerHTML = "";
        document.getElementById('cchoice').style.border = "solid 1px green";
            
      }else{        
             document.getElementById('errorcchoice').innerHTML = "<i>* Please enter your Current Choice Correctly!</i>";
        document.getElementById('errorcchoice').style.color = "red";
        document.getElementById('cchoice').style.border = "solid 1px red";
        document.getElementById('cchoice').focus();           
      }
    }

      
        let p = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['cmajor'].value.trim() == ""){
          document.getElementById('errorcmajor').innerHTML = "<i>*Please enter your Major</i>";
          document.getElementById('errorcmajor').style.color = "red";
          document.getElementById('cmajor').style.border = "solid thin red";
       }else{
      let cmajor = document.forms['ucuForm']['cmajor'].value;      
      if(document.forms['ucuForm']['cmajor'].value.trim().match(p)){        
        document.getElementById('errorcmajor').innerHTML = "";
        document.getElementById('cmajor').style.border = "solid 1px green"; 
            
      }else{        
        document.getElementById('errorcmajor').innerHTML = "<i>* Please enter your Major Correctly!</i>";
        document.getElementById('errorcmajor').style.color = "red";
        document.getElementById('cmajor').style.border = "solid 1px red";
        document.getElementById('cmajor').focus();
       }                 
      }
      
        let q = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['reason'].value.trim() == ""){
          document.getElementById('errorreason').innerHTML = "<i>*Please enter your Reasons</i>";
          document.getElementById('errorreason').style.color = "red";
          document.getElementById('reason').style.border = "solid thin red";
       }else{
      let reason = document.forms['ucuForm']['reason'].value;      
      if(document.forms['ucuForm']['reason'].value.trim().match(q)){        
        document.getElementById('errorreason').innerHTML = "";
        document.getElementById('reason').style.border = "solid 1px green";  
            
      }else{        
          document.getElementById('errorreason').innerHTML = "<i>* Please enter your Reasons Correctly!</i>";
        document.getElementById('errorreason').style.color = "red";
        document.getElementById('reason').style.border = "solid 1px red";
        document.getElementById('reason').focus();           
      }
    }

      
        let r = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['hc1'].value.trim() == ""){
          document.getElementById('errorhc1').innerHTML = "<i>*Please enter his/her course</i>";
          document.getElementById('errorhc1').style.color = "red";
          document.getElementById('hc1').style.border = "solid thin red";
       }else{
      let hc1 = document.forms['ucuForm']['hc1'].value;      
      if(document.forms['ucuForm']['hc1'].value.trim().match(r)){   
        document.getElementById('errorhc1').innerHTML = "";
        document.getElementById('hc1').style.border = "solid 1px green";
            
      }else{        
         document.getElementById('errorhc1').innerHTML = "<i>* Please enter his/her course Correctly!</i>";
        document.getElementById('errorhc1').style.color = "red";
        document.getElementById('hc1').style.border = "solid 1px red";
        document.getElementById('hc1').focus();
         }     
      }

      
        let s = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['rucu'].value.trim() == ""){
          document.getElementById('erucu').innerHTML = "<i>*Please enter your Reasons</i>";
          document.getElementById('erucu').style.color = "red";
          document.getElementById('rucu').style.border = "solid thin red";
       }else{
      let rucu = document.forms['ucuForm']['rucu'].value;      
       if(document.forms['ucuForm']['rucu'].value.trim().match(s)){         
        document.getElementById('erucu').innerHTML = "";
        document.getElementById('rucu').style.border = "solid 1px green";
            
      }else{        
           document.getElementById('erucu').innerHTML = "<i>* Please enter your Reasons Correctly!</i>";
        document.getElementById('erucu').style.color = "red";
        document.getElementById('rucu').style.border = "solid 1px red";
        document.getElementById('rucu').focus();            
      }
    }




      
      let a1 = /^[A-Za-z]+$/;
      if(document.forms['ucuForm']['flname'].value.trim() == ""){
          document.getElementById('eflname').innerHTML = "<i>*Please enter your Father's Last Name</i>";
          document.getElementById('eflname').style.color = "red";
          document.getElementById('flname').style.border = "solid thin red";
       }else{
      let flname = document.forms['ucuForm']['flname'].value;
      if(document.forms['ucuForm']['flname'].value.trim().match(a1)){            
        document.getElementById('eflname').innerHTML = "";
        document.getElementById('flname').style.border = "solid 1px green";                      
      }else{
        document.getElementById('eflname').innerHTML = "<i>* Please enter your Father's Last Name Correctly!</i>";
        document.getElementById('eflname').style.color = "red";
        document.getElementById('flname').style.border = "solid 1px red";
        document.getElementById('flname').focus();
        }
      }
      
        let a2 = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['ffname'].value.trim() == ""){
          document.getElementById('effname').innerHTML = "<i>*Please enter your Father's First Name</i>";
          document.getElementById('effname').style.color = "red";
          document.getElementById('ffname').style.border = "solid thin red";
       }else{
      let ffname = document.forms['ucuForm']['ffname'].value;      
      if(document.forms['ucuForm']['ffname'].value.trim().match(a2)){         
        
           document.getElementById('effname').innerHTML = "";
        document.getElementById('ffname').style.border = "solid 1px green";
      }else{        
         document.getElementById('effname').innerHTML = "<i>* Please enter your Father's First Name Correctly!</i>";
        document.getElementById('effname').style.color = "red";
        document.getElementById('ffname').style.border = "solid 1px red";
        document.getElementById('ffname').focus();           
      }
    }


      
         let a3 = /^[A-Za-z]+$/;

         if(document.forms['ucuForm']['fmname'].value.trim() == ""){
          document.getElementById('efmname').innerHTML = "<i>*Please enter your Father's Middle Name</i>";
          document.getElementById('efmname').style.color = "red";
          document.getElementById('fmname').style.border = "solid thin red";
       }else{
      let fmname = document.forms['ucuForm']['fmname'].value;      
      if(document.forms['ucuForm']['fmname'].value.trim().match(a3)){       
        document.getElementById('efmname').innerHTML = "";
        document.getElementById('fmname').style.border = "solid 1px green";
           
      }else{        
            document.getElementById('efmname').innerHTML = "<i>* Please enter your Father's Middle Name Correctly!</i>";
        document.getElementById('efmname').style.color = "red";
        document.getElementById('fmname').style.border = "solid 1px red";
        document.getElementById('fmname').focus();           
      }
    }
      
        let a4 = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['foccupation'].value.trim() == ""){
          document.getElementById('efoccupation').innerHTML = "<i>*Please enter your Father's Occupation</i>";
          document.getElementById('efoccupation').style.color = "red";
          document.getElementById('foccupation').style.border = "solid thin red";
       }else{
       let foccupation = document.forms['ucuForm']['foccupation'].value;      
      if(document.forms['ucuForm']['foccupation'].value.trim().match(a4)){          
        
          document.getElementById('efoccupation').innerHTML = "";
        document.getElementById('foccupation').style.border = "solid 1px green"; 
      }else{        
        document.getElementById('efoccupation').innerHTML = "<i>* Please enter your Father's Occupation Correctly!</i>";
        document.getElementById('efoccupation').style.color = "red";
        document.getElementById('foccupation').style.border = "solid 1px red";
        document.getElementById('foccupation').focus();               
      }
    }

      
        let a5 = /^[A-Za-z]+$/;
         if(document.forms['ucuForm']['fea'].value.trim() == ""){
          document.getElementById('efea').innerHTML = "<i>*Please enter your Father's Educational Attainment</i>";
          document.getElementById('efea').style.color = "red";
          document.getElementById('fea').style.border = "solid thin red";
       }else{
       let fea = document.forms['ucuForm']['fea'].value;      
      if(document.forms['ucuForm']['fea'].value.trim().match(a5)){         
       document.getElementById('efea').innerHTML = "";
        document.getElementById('fea').style.border = "solid 1px green"; 
           
      }else{        
           document.getElementById('efea').innerHTML = "<i>* Please enter your Father's Educational Attainment Correctly!</i>";
        document.getElementById('efea').style.color = "red";
        document.getElementById('fea').style.border = "solid 1px red";
        document.getElementById('fea').focus();            
      }
    }


      //mother
      let a6 = /^[A-Za-z]+$/;
      if(document.forms['ucuForm']['mlname'].value.trim() == ""){
          document.getElementById('emlname').innerHTML = "<i>*Please enter your Mother's Last Name</i>";
          document.getElementById('emlname').style.color = "red";
          document.getElementById('mlname').style.border = "solid thin red";
       }else{
      let mlname = document.forms['ucuForm']['mlname'].value;
      if(document.forms['ucuForm']['mlname'].value.trim().match(a6)){            
        document.getElementById('emlname').innerHTML = "";
        document.getElementById('mlname').style.border = "solid 1px green";                      
      }else{
        document.getElementById('emlname').innerHTML = "<i>* Please enter your Mother's Last Name Correctly!</i>";
        document.getElementById('emlname').style.color = "red";
        document.getElementById('mlname').style.border = "solid 1px red";
        document.getElementById('mlname').focus();
        }
      }
      
        let a7 = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['mfname'].value.trim() == ""){
          document.getElementById('emfname').innerHTML = "<i>*Please enter your Mother's First Name</i>";
          document.getElementById('emfname').style.color = "red";
          document.getElementById('mfname').style.border = "solid thin red";
       }else{
      let mfname = document.forms['ucuForm']['mfname'].value;      
      if(document.forms['ucuForm']['mfname'].value.trim().match(a7)){         
        
           document.getElementById('emfname').innerHTML = "";
        document.getElementById('mfname').style.border = "solid 1px green";
      }else{        
         document.getElementById('emfname').innerHTML = "<i>* Please enter your Mother's First Name Correctly!</i>";
        document.getElementById('emfname').style.color = "red";
        document.getElementById('mfname').style.border = "solid 1px red";
        document.getElementById('mfname').focus();           
      }
    }
    
         let a8 = /^[A-Za-z]+$/;
         if(document.forms['ucuForm']['mmname'].value.trim() == ""){
          document.getElementById('emmname').innerHTML = "<i>*Please enter your Mother's Middle Name</i>";
          document.getElementById('emmname').style.color = "red";
          document.getElementById('mmname').style.border = "solid thin red";
       }else{
      let mmname = document.forms['ucuForm']['mmname'].value;      
      if(document.forms['ucuForm']['mmname'].value.trim().match(a8)){       
        document.getElementById('emmname').innerHTML = "";
        document.getElementById('mmname').style.border = "solid 1px green";
           
      }else{        
            document.getElementById('emmname').innerHTML = "<i>* Please enter your Mother's Middle Name Correctly!</i>";
        document.getElementById('emmname').style.color = "red";
        document.getElementById('mmname').style.border = "solid 1px red";
        document.getElementById('mmname').focus();           
      }
    }


      
        let a9 = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['moccupation'].value.trim() == ""){
          document.getElementById('emoccupation').innerHTML = "<i>*Please enter your Mother's Occupation</i>";
          document.getElementById('emoccupation').style.color = "red";
          document.getElementById('moccupation').style.border = "solid thin red";
       }else{
       let moccupation = document.forms['ucuForm']['moccupation'].value;      
      if(document.forms['ucuForm']['moccupation'].value.trim().match(a4)){          
        
          document.getElementById('emoccupation').innerHTML = "";
        document.getElementById('moccupation').style.border = "solid 1px green"; 
      }else{        
        document.getElementById('emoccupation').innerHTML = "<i>* Please enter your Mother's Occupation Correctly!</i>";
        document.getElementById('emoccupation').style.color = "red";
        document.getElementById('moccupation').style.border = "solid 1px red";
        document.getElementById('moccupation').focus();               
      }
    }


      
        let a10 = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['mea'].value.trim() == ""){
          document.getElementById('emea').innerHTML = "<i>*Please enter your Mother's Educational Attainment</i>";
          document.getElementById('emea').style.color = "red";
          document.getElementById('mea').style.border = "solid thin red";
       }else{
       let mea = document.forms['ucuForm']['mea'].value;      
      if(document.forms['ucuForm']['mea'].value.trim().match(a10)){         
       document.getElementById('emea').innerHTML = "";
        document.getElementById('mea').style.border = "solid 1px green"; 
           
      }else{        
           document.getElementById('emea').innerHTML = "<i>* Please enter your Mother's Educational Attainment Correctly!</i>";
        document.getElementById('emea').style.color = "red";
        document.getElementById('mea').style.border = "solid 1px red";
        document.getElementById('mea').focus();            
      }
    }

      //address
      let a11 = /^[A-Za-z]+$/;
      if(document.forms['ucuForm']['apart2'].value.trim() == ""){
          document.getElementById('eapart2').innerHTML = "<i>*Please enter Appartment, Building, etc..</i>";
          document.getElementById('eapart2').style.color = "red";
          document.getElementById('apart2').style.border = "solid thin red";
       }else{
      let apart2 = document.forms['ucuForm']['apart2'].value;      
      if(document.forms['ucuForm']['apart2'].value.trim().match(a11)){        
        document.getElementById('eapart2').innerHTML = "";
        document.getElementById('apart2').style.border = "solid 1px green"; 
         
      }else{        
         document.getElementById('eapart2').innerHTML = "<i>* Please enter Appartment, Building, etc..Correctly!</i>";
        document.getElementById('eapart2').style.color = "red";
        document.getElementById('apart2').style.border = "solid 1px red";
        document.getElementById('apart2').focus();
       }      
      }

      
        let a12 = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['street2'].value.trim() == ""){
          document.getElementById('estreet2').innerHTML = "<i>*Please enter Street Address</i>";
          document.getElementById('estreet2').style.color = "red";
          document.getElementById('street2').style.border = "solid thin red";
       }else{
      let street2 = document.forms['ucuForm']['street2'].value;      
      if(document.forms['ucuForm']['street2'].value.trim().match(a12)){        
        document.getElementById('estreet2').innerHTML = "";
        document.getElementById('street2').style.border = "solid 1px green"; 
           
      }else{        
           document.getElementById('estreet2').innerHTML = "<i>* Please enter Street Address Correctly!</i>";
        document.getElementById('estreet2').style.color = "red";
        document.getElementById('street2').style.border = "solid 1px red";
        document.getElementById('street2').focus();           
      }
    }


      
        let a13 = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['city2'].value.trim() == ""){
          document.getElementById('ecity2').innerHTML = "<i>*Please enter City Address</i>";
          document.getElementById('ecity2').style.color = "red";
          document.getElementById('city2').style.border = "solid thin red";
       }else{
      let city2 = document.forms['ucuForm']['city2'].value;      
      if(document.forms['ucuForm']['city2'].value.trim().match(a13)){         
        document.getElementById('ecity2').innerHTML = "";
        document.getElementById('city2').style.border = "solid 1px green"; 
            
      }else{        
           document.getElementById('ecity2').innerHTML = "<i>* Please enter City Address Correctly!</i>";
        document.getElementById('ecity2').style.color = "red";
        document.getElementById('city2').style.border = "solid 1px red";
        document.getElementById('city2').focus();           
      }
    }

       
        let a14 = /^[A-Za-z]+$/;

         if(document.forms['ucuForm']['nos'].value.trim() == ""){
          document.getElementById('enos').innerHTML = "<i>*Please enter Number of Spouse</i>";
          document.getElementById('enos').style.color = "red";
          document.getElementById('nos').style.border = "solid thin red";
       }else{
      let nos = document.forms['ucuForm']['nos'].value;      
      if(document.forms['ucuForm']['nos'].value.trim().match(a14)){        
        document.getElementById('enos').innerHTML = "";
        document.getElementById('nos').style.border = "solid 1px green"; 
           
      }else{        
        document.getElementById('enos').innerHTML = "<i>* Please enter Number of Spouse Correctly!</i>";
        document.getElementById('enos').style.color = "red";
        document.getElementById('nos').style.border = "solid 1px red";
        document.getElementById('nos').focus();              
      }
    }


        let a15 = /^[A-Za-z]+$/;

        if(document.forms['ucuForm']['nationality'].value.trim() == ""){
          document.getElementById('enationality').innerHTML = "<i>*Please enter Nationality</i>";
          document.getElementById('enationality').style.color = "red";
          document.getElementById('nationality').style.border = "solid thin red";
       }else{
      let nationality = document.forms['ucuForm']['nationality'].value;      
      if(document.forms['ucuForm']['nationality'].value.trim().match(a15)){         
        document.getElementById('enationality').innerHTML = "";
        document.getElementById('nationality').style.border = "solid 1px green";
           
      }else{        
         document.getElementById('enationality').innerHTML = "<i>* Please enter Nationality Correctly!</i>";
        document.getElementById('enationality').style.color = "red";
        document.getElementById('nationality').style.border = "solid 1px red";
        document.getElementById('nationality').focus();              
      }
    }

        let a16 = /^[A-Za-z]+$/;

        if(document.forms['ucuForm']['religion'].value.trim() == ""){
          document.getElementById('ereligion').innerHTML = "<i>*Please enter Religion</i>";
          document.getElementById('ereligion').style.color = "red";
          document.getElementById('religion').style.border = "solid thin red";
       }else{
      let religion = document.forms['ucuForm']['religion'].value;      
      if(document.forms['ucuForm']['religion'].value.trim().match(a16)){        
        document.getElementById('ereligion').innerHTML = "";
        document.getElementById('religion').style.border = "solid 1px green"; 
           
      }else{        
          document.getElementById('ereligion').innerHTML = "<i>* Please enter Religion Correctly!</i>";
        document.getElementById('ereligion').style.color = "red";
        document.getElementById('religion').style.border = "solid 1px red";
        document.getElementById('religion').focus();            
      }
    }

    let a17 = /^[A-Za-z]+$/;
    if(document.forms['ucuForm']['ea'].value.trim() == ""){
          document.getElementById('eea').innerHTML = "<i>*Please enter Educational Attainment</i>";
          document.getElementById('eea').style.color = "red";
          document.getElementById('ea').style.border = "solid thin red";
       }else{
      let ea = document.forms['ucuForm']['ea'].value;      
      if(document.forms['ucuForm']['ea'].value.trim().match(a17)){         
        document.getElementById('eea').innerHTML = "";
        document.getElementById('ea').style.border = "solid 1px green"; 
           
      }else{        
        document.getElementById('eea').innerHTML = "<i>* Please enter Educational Attainment Correctly!</i>";
        document.getElementById('eea').style.color = "red";
        document.getElementById('ea').style.border = "solid 1px red";
        document.getElementById('ea').focus();
         }     
      }


      
        let a18 = /^[A-Za-z]+$/;
        if(document.forms['ucuForm']['occu3'].value.trim() == ""){
          document.getElementById('eoccu3').innerHTML = "<i>*Please enter Occupation</i>";
          document.getElementById('eoccu3').style.color = "red";
          document.getElementById('occu3').style.border = "solid thin red";
       }else{
      let occu3 = document.forms['ucuForm']['occu3'].value;      
      if(document.forms['ucuForm']['occu3'].value.trim().match(a18)){          
         document.getElementById('eoccu3').innerHTML = "";
        document.getElementById('occu3').style.border = "solid 1px green";
           
      }else{        
          
        document.getElementById('eoccu3').innerHTML = "<i>* Please enter Occupation Correctly!</i>";
        document.getElementById('eoccu3').style.color = "red";
        document.getElementById('occu3').style.border = "solid 1px red";
        document.getElementById('occu3').focus();            
      }
    }

      
       












      
      
      
      
      
      
 

     
    } 




    function num(){
      let sy = /^[0-9]+$/; 
      if(document.forms['ucuForm']['sy'].value.trim() == ""){
          document.getElementById('errorSy').innerHTML = "<i>*Please enter your School Year</i>";
          document.getElementById('errorSy').style.color = "red";
          document.getElementById('sy').style.border = "solid thin red";
       }else{
      if(document.forms['ucuForm']['sy'].value.trim().match(sy)){            
        document.getElementById('errorSy').innerHTML = "";
        document.getElementById('sy').style.border = "solid 1px green";
        document.getElementById('errorSy').style.color = "green";
        document.getElementById('errorSy').innerHTML = "";
                          
      }else{
        document.getElementById('errorSy').innerHTML = "<i>*Please enter your School Year Correctly!</i>";
        document.getElementById('errorSy').style.color = "red";
        document.getElementById('sy').style.border = "solid 1px red";
        document.getElementById('sy').focus();
       }
      }

      
        let zip1 = /^[0-9]+$/;
        if(document.forms['ucuForm']['zip1'].value.trim() == ""){
          document.getElementById('errorzip1').innerHTML = "<i>*Please enter your Zip Code</i>";
          document.getElementById('errorzip1').style.color = "red";
          document.getElementById('zip1').style.border = "solid thin red";
       }else{
      if(document.forms['ucuForm']['zip1'].value.trim().match(zip1)){            
        document.getElementById('errorzip1').innerHTML = "";
        document.getElementById('zip1').style.border = "solid 1px green";
        document.getElementById('errorzip1').style.color = "green";
        document.getElementById('errorzip1').innerHTML = "";
                            
      }else{
        document.getElementById('errorzip1').innerHTML = "<i>*Please enter your Zip Code Correctly!</i>";
        document.getElementById('errorzip1').style.color = "red";
        document.getElementById('zip1').style.border = "solid 1px red";
        document.getElementById('zip1').focus();
       }
      }

       let contact = /^[0-9]+$/;
       if(document.forms['ucuForm']['contact'].value.trim() == ""){
          document.getElementById('errorcontact').innerHTML = "<i>*Please enter your Contact Number</i>";
          document.getElementById('errorcontact').style.color = "red";
          document.getElementById('contact').style.border = "solid thin red";
       }else{
      if(document.forms['ucuForm']['contact'].value.trim().match(contact)){            
        document.getElementById('errorcontact').innerHTML = "";
        document.getElementById('contact').style.border = "solid 1px green";
        document.getElementById('errorcontact').style.color = "green";
        document.getElementById('errorcontact').innerHTML = "";
                            
      }else{
        document.getElementById('errorcontact').innerHTML = "<i>*Please enter your Contact Number Correctly!</i>";
        document.getElementById('errorcontact').style.color = "red";
        document.getElementById('contact').style.border = "solid 1px red";
        document.getElementById('contact').focus();
       }
      }

       let guardiancontact = /^[0-9]+$/;
       if(document.forms['ucuForm']['guardiancontact'].value.trim() == ""){
          document.getElementById('errorguardiancontact').innerHTML = "<i>*Please enter your Guardian's Contact no.</i>";
          document.getElementById('errorguardiancontact').style.color = "red";
          document.getElementById('guardiancontact').style.border = "solid thin red";
       }else{
      if(document.forms['ucuForm']['guardiancontact'].value.trim().match(guardiancontact)){            
        document.getElementById('errorguardiancontact').innerHTML = "";
        document.getElementById('guardiancontact').style.border = "solid 1px green";
        document.getElementById('errorguardiancontact').style.color = "green";
        document.getElementById('errorguardiancontact').innerHTML = "";
                            
      }else{
        document.getElementById('errorguardiancontact').innerHTML = "<i>*Please enter your Guardian's Contact no. Correctly!</i>";
        document.getElementById('errorguardiancontact').style.color = "red";
        document.getElementById('guardiancontact').style.border = "solid 1px red";
        document.getElementById('guardiancontact').focus();
       }
      }

      let fcontact = /^[0-9]+$/;
      if(document.forms['ucuForm']['fcontact'].value.trim() == ""){
          document.getElementById('efcontact').innerHTML = "<i>*Please enter your Father's Contact</i>";
          document.getElementById('efcontact').style.color = "red";
          document.getElementById('fcontact').style.border = "solid thin red";
       }else{
      if(document.forms['ucuForm']['fcontact'].value.trim().match(fcontact)){            
        document.getElementById('efcontact').innerHTML = "";
        document.getElementById('fcontact').style.border = "solid 1px green";
        document.getElementById('efcontact').style.color = "green";
        document.getElementById('efcontact').innerHTML = "";
                            
      }else{
        document.getElementById('efcontact').innerHTML = "<i>*Please enter your Father's Contact Correctly!</i>";
        document.getElementById('efcontact').style.color = "red";
        document.getElementById('fcontact').style.border = "solid 1px red";
        document.getElementById('fcontact').focus();
       }
      }

       let mcontact = /^[0-9]+$/;
       if(document.forms['ucuForm']['mcontact'].value.trim() == ""){
          document.getElementById('emcontact').innerHTML = "<i>*Please enter your Mother's Contact</i>";
          document.getElementById('emcontact').style.color = "red";
          document.getElementById('mcontact').style.border = "solid thin red";
       }else{
      if(document.forms['ucuForm']['mcontact'].value.trim().match(mcontact)){            
        document.getElementById('emcontact').innerHTML = "";
        document.getElementById('mcontact').style.border = "solid 1px green";
        document.getElementById('emcontact').style.color = "green";
        document.getElementById('emcontact').innerHTML = "";
                            
      }else{
        document.getElementById('emcontact').innerHTML = "<i>*Please enter your Mother's Contact Correctly!</i>";
        document.getElementById('emcontact').style.color = "red";
        document.getElementById('mcontact').style.border = "solid 1px red";
        document.getElementById('mcontact').focus();
       }
      }


       let nosofc = /^[0-9]+$/;
     if(document.forms['ucuForm']['nosofc'].value.trim() == ""){
          document.getElementById('enosofc').innerHTML = "<i>*Please enter Number of Children</i>";
          document.getElementById('enosofc').style.color = "red";
          document.getElementById('nosofc').style.border = "solid thin red";
       }else{
     if(document.forms['ucuForm']['nosofc'].value.trim().match(nosofc)){            
        document.getElementById('enosofc').innerHTML = "";
        document.getElementById('nosofc').style.border = "solid 1px green";
        document.getElementById('enosofc').style.color = "green";
        document.getElementById('enosofc').innerHTML = "";
                            
      }else{
        document.getElementById('enosofc').innerHTML = "<i>*Please enter Number of Children Correctly!</i>";
        document.getElementById('enosofc').style.color = "red";
        document.getElementById('nosofc').style.border = "solid 1px red";
        document.getElementById('nosofc').focus();
       }
      }


  let nosboys = /^[0-9]+$/;
  if(document.forms['ucuForm']['nosboys'].value.trim() == ""){
          document.getElementById('enosboys').innerHTML = "<i>*Please enter number of Boys</i>";
          document.getElementById('enosboys').style.color = "red";
          document.getElementById('nosboys').style.border = "solid thin red";
       }else{
      if(document.forms['ucuForm']['nosboys'].value.trim().match(nosboys)){            
        document.getElementById('enosboys').innerHTML = "";
        document.getElementById('nosboys').style.border = "solid 1px green";
        document.getElementById('enosboys').style.color = "green";
        document.getElementById('enosboys').innerHTML = "";
                            
      }else{
        document.getElementById('enosboys').innerHTML = "<i>*Please enter number of Boys Correctly!</i>";
        document.getElementById('enosboys').style.color = "red";
        document.getElementById('nosboys').style.border = "solid 1px red";
        document.getElementById('nosboys').focus();
       }
      }


       let nosgirls = /^[0-9]+$/;
       if(document.forms['ucuForm']['nosgirls'].value.trim() == ""){
          document.getElementById('enosgirls').innerHTML = "<i>*Please enter number of Girls</i>";
          document.getElementById('enosgirls').style.color = "red";
          document.getElementById('nosgirls').style.border = "solid thin red";
       }else{
      if(document.forms['ucuForm']['nosgirls'].value.trim().match(nosgirls)){            
        document.getElementById('enosgirls').innerHTML = "";
        document.getElementById('nosgirls').style.border = "solid 1px green";
        document.getElementById('enosgirls').style.color = "green";
        document.getElementById('enosgirls').innerHTML = "";
                            
      }else{
        document.getElementById('enosgirls').innerHTML = "<i>*Please enter Number of Girls Correctly!</i>";
        document.getElementById('enosgirls').style.color = "red";
        document.getElementById('nosgirls').style.border = "solid 1px red";
        document.getElementById('nosgirls').focus();
       }
      }

      let nobro = /^[0-9]+$/;
      if(document.forms['ucuForm']['nobro'].value.trim() == ""){
          document.getElementById('enobro').innerHTML = "<i>*Please enter Number of Brother's</i>";
          document.getElementById('enobro').style.color = "red";
          document.getElementById('nobro').style.border = "solid thin red";
       }else{
      if(document.forms['ucuForm']['nobro'].value.trim().match(nobro)){            
        document.getElementById('enobro').innerHTML = "";
        document.getElementById('nobro').style.border = "solid 1px green";
        document.getElementById('enobro').style.color = "green";
        document.getElementById('enobro').innerHTML = "";
                            
      }else{
        document.getElementById('enobro').innerHTML = "<i>*Please enter Number of Brother's Correctly!</i>";
        document.getElementById('enobro').style.color = "red";
        document.getElementById('nobro').style.border = "solid 1px red";
        document.getElementById('nobro').focus();
       }
      }

      let nosis = /^[0-9]+$/;

      if(document.forms['ucuForm']['nosis'].value.trim() == ""){
          document.getElementById('enosis').innerHTML = "<i>*Please enter Number of Sister's</i>";
          document.getElementById('enosis').style.color = "red";
          document.getElementById('nosis').style.border = "solid thin red";
       }else{
      if(document.forms['ucuForm']['nosis'].value.trim().match(nosis)){            
        document.getElementById('enosis').innerHTML = "";
        document.getElementById('nosis').style.border = "solid 1px green";
        document.getElementById('enosis').style.color = "green";
        document.getElementById('enosis').innerHTML = "";
                            
      }else{
        document.getElementById('enosis').innerHTML = "<i>*Please enter Number of Sister's Correctly!</i>";
        document.getElementById('enosis').style.color = "red";
        document.getElementById('nosis').style.border = "solid 1px red";
        document.getElementById('nosis').focus();
       }
      }
      

    
     
    }




    function alphaNumeric(){
      let RegEx = /^[0-9a-zA-Z]+$/; 
      if(document.forms['myForm']['RegEx'].value.trim().match(RegEx)){            
        document.getElementById('RegExSpan').innerHTML = "";
        document.getElementById('RegEx').style.border = "solid 1px green";
        document.getElementById('RegExSpan').style.color = "green";
        document.getElementById('RegExSpan').innerHTML = "<i>*Your input is accepted!</i>";
        return true;                      
      }else{
        document.getElementById('RegExSpan').innerHTML = "<i>*Please enter alphabets or numbers !</i>";
        document.getElementById('RegExSpan').style.color = "red";
        document.getElementById('RegEx').style.border = "solid 1px red";
        document.getElementById('RegEx').focus();
        return false;
      }
    }


       function hide(abc) {
    let source = document.forms['ucuForm']['source'].value;
    if(source == "yes"){
      var otherspo = document.getElementById("otherspo");
      otherspo.style.display = sourcesch.checked ? "block" : "none";
    }else{
      var otherspo = document.getElementById("otherspo")
      otherspo.style.display = sourceothers.checked ? "block" : "none";
    }
  }


