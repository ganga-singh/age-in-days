function Age()
 {
    var birthday = new Date(document.forms[0].birthday.value);
    var bday=birthday.getDate();
  var bmo=(birthday.getMonth()+1);
  var byr=birthday.getFullYear();
  var tdyears;
  var i;
  var tlpyr = 0, tnlpyr = 0;
  var tl, tdayslp, tdaysnlp;
  var tby31 = 0, tby30 = 0;
  var tdby31, tdby30, tdby;
  var nbf, npf;
  var tdbm = 0, tdpm = 0;
  var tpy31 = 0, tpy30 = 0;
  var tdpy31 ,tdpy30, tdpy;
    var tdOfAge;
  var now = new Date();
  tday=now.getDate();
  tmo=(now.getMonth()+1);
  tyr=(now.getFullYear());
  
   

 

    if(birthday > now)
   {
    alert("INVALID DATE OF BIRTH");
   }

   else
  {

  var isLeapYear = function(year)
  {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }
  
  for(i = byr+1; i < tyr; i++)
   {
    if (isLeapYear(i))
    {
      tlpyr++;
    }
    else
    {
      tnlpyr++;
    }
     }   
       tdayslp=(366*tlpyr);
       tdaysnlp=(365*tnlpyr);

       tdyears=tdaysnlp+tdayslp;


    
 
    var is31Month = function(month)
    {
      return ((month == 1) || (month == 3) || (month==5) || (month==7) || (month==8) || (month==10) || (month==12));
    }

    var is30Month = function(month)
    {
      return ((month==4) || (month==6) || (month==9) || (month==11));
    }


  if (byr < tyr) {

    for(i=bmo+1; i <= 12; i++)
      {
        if(is31Month(i))
        {
          tby31++;
        }
        else if (is30Month(i))
        {
          tby30++;
        }
      }
         
       tdby31=(31*tby31);
       tdby30=(30*tby30);


    if(isLeapYear(byr))
      {
        nbf=29;
      }
      else
      {
        nbf=28;
      }
     
      if (bmo >= 2) 
       {
        tdby=tdby30+tdby31;
       }
       else
       {
        tdby=tdby30+tdby31+nbf;
       }
    
  

   for(i = 1; i < tmo; i++)
    {
      
        if(is31Month(i))
        {
          tpy31++;
        }
        else if (is30Month(i))
        {
          tpy30++;
        }
    }

       tdpy31=(31*tpy31);
       tdpy30=(30*tpy30);

       //alert(tdpy);
    
     if(isLeapYear(tyr))
      {
        npf=29;
      }
      else
      {
        npf=28;
      }

      //alert(nf);
    
    if (tmo < 2) 
      
       {
        tdpy=tdpy30+tdpy31;
       }
         else
       {
         tdpy=tdpy30+tdpy31+npf;
       }


    if(is31Month(bmo))
    {
      for(i=bday+1; i<=31; i++)
      {
        tdbm++;
      }
    }


   else if (is30Month(bmo)) 
    {
      for(i=bday+1; i<=30; i++)
      {
        tdbm++;
      }
    }

    if(isLeapYear(byr))
    {
      if(bmo==2)
      {
        for(i=bday+1; i<=29; i++)
        {
          tdbm++;
        }
      }
    }

    else
    {
      if(bmo==2)
      {
        for(i=bday+1; i<=28; i++)
        {
          tdbm++;
        }
      }
    }

     
    
      for(i=1; i<=tday; i++)
      {
        tdpm++;
      }

     tdOfAge = tdyears+tdpy+tdby+tdbm+tdpm;

    alert("Wohooo !!! You have spend "+tdOfAge+ " days of your life  .. MAY YOU LIVE LONG");


   }

   else {

   if (bmo < tmo)
   {
    
     for(i=bmo+1; i < tmo; i++)
      {
        if(is31Month(i))
        {
          tby31++;
        }
        else if (is30Month(i))
        {
          tby30++;
        }
      }
         
       tdby31=(31*tby31);
       tdby30=(30*tby30);


    if(isLeapYear(byr))
      {
        nbf=29;
      }
      else
      {
        nbf=28;
      }
     
      if (bmo >= 2) 
       {
        tdby=tdby30+tdby31;
       }
       else
       {
        tdby=tdby30+tdby31+nbf;
       }

        if(is31Month(bmo))
    {
      for(i=bday+1; i<=31; i++)
      {
        tdbm++;
      }
    }


   else if (is30Month(bmo)) 
    {
      for(i=bday+1; i<=30; i++)
      {
        tdbm++;
      }
    }

    if(isLeapYear(byr))
    {
      if(bmo==2)
      {
        for(i=bday+1; i<=29; i++)
        {
          tdbm++;
        }
      }
    }

    else
    {
      if(bmo==2)
      {
        for(i=bday+1; i<=28; i++)
        {
          tdbm++;
        }
      }
    }

      for(i=1; i<=tday; i++)
      {
        tdpm++;
      }




    tdOfAge =tdby+tdbm+tdpm;


    alert("Wohooo !!! You have spend "+tdOfAge+ " days of your life  .. MAY YOU LIVE LONG");

   }
        else
        {

          for(i=bday+1;i<tmo;i++)
          {
            tdbm++;
          }
        
    

    tdOfAge = tdbm;

   

    alert("Wohooo !!! You have spend "+tdOfAge+ " days of your life  .. MAY YOU LIVE LONG");
    

   }

}
  
}

}