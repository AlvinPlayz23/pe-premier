function headerSec() {
  var nav = document.createElement("div");

  nav.setAttribute("id", "header");

  nav.innerHTML = `
    <div id="headerCont">
      <div>
        <img src="./img/mainicons.png" alt="" width="100px" id="icons" />
      </div>
      <div>
      
       <div id="head1">

 
        
<div class="dropdown">


          <button style="margin-left: 60px" >
            <strong>Premier League &nbsp;&nbsp;&nbsp;&nbsp;
      <i class="fa fa-caret-down"></i></strong>
          </button>

            <div class="dropdown-content">
  <a href="index.html">Home</a>
  <a href="#">Players</a>
  <a href="#">Fixtures</a>
  <a href="#">Results</a>
  <a href="#">News</a>
  <a href="tables.html">Tables</a>
  <a href="#">Transfers</a>
  <a href="#">Clubs</a>
  </div> 

        
<div class="dropdown">




          <button ><strong>More &nbsp;&nbsp;&nbsp;&nbsp;
      <i class="fa fa-caret-down"></i></strong></button>


                  <div class="dropdown-content">
  <a href="#">Stats</a>
  <a href="#">ePremier League</a><a href="#">Stay Well</a>
  <a href="#">About</a>
    <a href="#">We are one Team</a>

  <a href="#">Season Review</a>
  <a href="#">Rainbow Laces</a>
  
  <a href="#">Nike Ball HUb</a>
  <a href="#">King of the Match</a>

  <a href="#">Contact Us</a>
  <a href="#">Transfers</a>
  
  <a href="#">Poppy</a>
    <a href="#">VAR</a>
  <a href="#">Asia Trophy</a>
  <a href="#">Photos</a>
  <a href="#">PL Live</a>
  <a href="#">Partners</a>  <a href="#">Publications</a>
  
  <a href="#">USA Bar Finder</a>
  <a href="#">Legal</a>
  </div>
</div>




          <button style="margin-left: 350px" id="headbtn">
            <strong>No Room for Racism</strong>
          </button>
          <button id="headbtn" style="margin-left:20px"><strong><a href="register.html" style="text-decoration:none;color:white">Sign In</a></strong></button
          ><button
            type="submit"
            style="
              font-size: 22px;
              float: right;
              margin-left: -100px;
              margin-right: 60px;
            "
          >
          </button>
            <i class="fa fa-search" id="headbtn" style="font-size:25px; padding-top:12px;"> </i>
        </div>

        <!--  -->
        <div id="head2">
          <button style="margin-left: 60px"><a href="index.html" style="text-decoration:none;color:#76766f">Home</a></button>
          <button><a href="fixture.html" style="text-decoration:none;color:#76766f">Fixtures</a></button>
          <button><a href="tables.html" style="text-decoration:none;color:#76766f">Tables</a></button>
          <button>Transfers</button>
          <button><a href="tickets.html" style="text-decoration:none;color:#76766f">Tickets</a></button>
          <button>Clubs</button>
          <button>Players</button>
          <button>News</button>
          <button style="margin-left: 70px; text-decoration:none" id="btn13"><span>&#8942;</span> &nbsp;More</button>
        </div>
      </div>
    </div>
    `;

  return nav;
}

document.getElementById("header1").appendChild(headerSec());
export default headerSec;
