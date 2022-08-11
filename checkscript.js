$(document).ready(function(){
     
    $("#btnsub").click(function(){
        var package = document.getElementById("package");
        var address = document.getElementById("address");
        var zip = document.getElementById("zip");
        var State = document.getElementById("State");
        var phnNo = document.getElementById("phnNo");
        var city = document.getElementById("city");
        var lastName = document.getElementById("lastName");
        var firstName = document.getElementById("firstName");
        var emails = document.getElementById("emails");
        if (package.value === "")
        {
          alert('Fill the form!');
          return;
        }
        if (address.value === "")
        {
          alert('Fill the form!');
          return;
        }
        if (zip.value === "")
        {
          alert('Fill the form!');
          return;
        }
        if (phnNo.value === "")
        {
          alert('Fill the form!');
          return;
        }
        if (State.value === "")
        {
          alert('Fill the form!');
          return;
        }
        if (city.value === "")
        {
          alert('Fill the form!');
          return;
        }
        if (lastName.value === "")
        {
          alert('Fill the form!');
          return;
        }
        if (firstName.value === "")
        {
          alert('Fill the form!');
          return;
        }
        if (emails.value === "")
        {
          alert('Fill the form!');
          return;
        }
       $("#fcheckout").hide();
       $("#details").show();
       $("#subdetails").show();
       $("#msg").show();
       $("#btnhome").show();

       var data, p;
    data = {
      "kashmir": 40000,
      "shimla": 67000,
      "ranthambore": 55000,
      "mumbai": 60000,
      "amritsar": 65000,
      "haridwar": 57000,
      "kerala": 30000,
      "goa": 35000,
      "south": 50000
    };

    p = document.getElementById('package').value;
    if (p === "GOLDEN TRIANGLE WITH KASHMIR TOUR")
      {
        $("#price").text(data.kashmir);
      }
      if (p === "GOLDEN TRIANGLE WITH SHIMLA TOUR")
      {
        $("#price").text(data.shimla);
      }
      if (p === "GOLDEN TRIANGLE WITH MUMBAI TOUR")
      {
        $("#price").text(data.mumbai);
      }
      if (p === "GOLDEN TRIANGLE WITH AMRITSAR TOUR")
      {
        $("#price").text(data.amritsar);
      }
      if (p === "GOLDEN TRIANGLE WITH HARIDWAR & RISHIKESH TOUR")
      {
        $("#price").text(data.haridwar);
      }
      if (p === "FASCINATING TOUR OF KERALA")
      {
        $("#price").text(data.kerala);
      }
      if (p === "TAJ MAHAL WITH GOA BEACHES")
      {
        $("#price").text(data.goa);
      }
      if (p === "BEST OF SOUTH INDIA")
      {
        $("#price").text(data.south);
      }
      if (p === "GOLDEN TRIANGLE WITH RANTHAMBORE TOUR")
      {
        $("#price").text(data.ranthambore);
      }
    $("#subname").text(firstName.value);
    $("#subphn").text(phnNo.value);
    $("#subpack").text(package.value);
      

    })

    $("#btnsub").click(function(){
      
    })


})

