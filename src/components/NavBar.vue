<template>
    <div class="navbar">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <div class="topnav" id="myTopnav">
        <a href="#home" class="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
        </div>
    </div>    
    
</template>
<script>
export default {
    name: 'NavBar',
    data() {
        return {

        };        
    },
    methods() {
        
    }
}
</script>
<style>
    .navbar {    
        margin-left: 5%;
        margin-bottom: 2%;
        padding-top: 1rem;    
        width: 90%;
        background-color: rgb(99, 90, 133);
        text-align: center;
    }
    .topnav {
        overflow: hidden;
    }

/* Style the links inside the navigation bar */
    .topnav a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

/* Change the color of links on hover */
    .topnav a:hover {
        background-color: #ddd;
        color: black;
    }

/* Add an active class to highlight the current page */
    .topnav a.active {
        background-color: #67328615;
        color: white;
    }

/* Hide the link that should open and close the topnav on small screens */
    .topnav .icon {
        display: none;        
    }
</style>