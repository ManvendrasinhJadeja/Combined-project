
// NavBar Component
function CreateNav(){
  return `
  <div class="nav_bar w-[100%] h-[80px]  flex justify-between items-center px-[10px] md:px-[15px]">
   <div class="nav_right w-[150px] md:w-[170px] h-[100%] flex justify-center items-center">
       <img src="./photo/nav_logo.svg" class="w-[90%] h-[90%]" alt="">
   </div>
   <div class="nav_center hidden sm:flex justify-center items-center space-x-7 text-[17px] font-semibold text-[#274C5B]">
       <div class="cursor-pointer text-[#274C5B]"><a href="">Home</a></div>
       <div class="cursor-pointer">About</div>

       <div class="">

           <ul class="ul_1 cursor-pointer" style="position: relative;">
               <li>
                   Pages
                   <ul class="ul_2 space-y-3 w-[180px] hover:block cursor-pointer text-[#274C5B] text-[17px]"  style="position: absolute;">
                       <li class=" hover:text-white hover:bg-[#274C5B] p-[10px_20px]"><a href="">Services</a></li>
                       <li class=" hover:text-white hover:bg-[#274C5B] p-[10px_20px]"><a href="">Services Single</a></li>
                       <li class=" hover:text-white hover:bg-[#274C5B] p-[10px_20px]"><a href="">Portfolio</a></li>
                       <li class=" hover:text-white hover:bg-[#274C5B] p-[10px_20px]"><a href="">Our Team</a></li>
                       <li class=" hover:text-white hover:bg-[#274C5B] p-[10px_20px]"><a href="">Blog</a></li>
                   </ul>

               </li>
           </ul>
       </div>
       <div class="">Shop</div>
       <div class="">Projects</div>
       <div class="">News</div>
   </div>
   
   <div class="nav_left hidden lg:flex justify-center items-center space-x-4">
       <div class="bg-[#7EB693] text-white w-[40px] h-[40px] flex justify-center items-center text-[18px] rounded-[50px] border-2 border-transparent hover:bg-transparent hover:text-[#7EB693] hover:border-[#7EB693] cursor-pointer"><i class="ri-search-line"></i></div>
       <div class="text-[#274C5B] flex justify-center items-center gap-x-[13px] border-2 border-[#E0E0E0] py-[5px] px-[8px] rounded-[30px] hover:border-[#274C5B]">
           <div class="w-[40px] h-[40px] bg-[#274C5B] text-white text-[18px] flex justify-center items-center rounded-[50px] cursor-pointer border-2 border-transparent hover:text-[#274C5B] hover:bg-transparent hover:border-[#274C5B]"><i class="ri-shopping-cart-2-line"></i></div>
           <div class="text-[#274C5B]"> Cart (0)</div> 
       </div>
   </div>
   
   <div class="nav_menu w-[100px] h-[100%] sm:hidden flex justify-end items-center text-[28px]">
       <i class="ri-menu-line"></i>
   </div>
</div>

<div class="nav_menu_bar w-full h-auto flex flex-col justify-center items-start text-[#274C5B]">
   <div class="w-[100%] h-auto pl-[20px] p-[10px] hover:text-white hover:bg-[#274C5B] cursor-pointer border-b-2 border-b-[#274C5B]">Home</div>
   <div class="w-[100%] h-auto pl-[20px] p-[10px] hover:text-white hover:bg-[#274C5B] cursor-pointer border-b-2 border-b-[#274C5B]">About</div>
   <div class="nav_sub_1 w-[100%] h-auto pl-[20px] p-[10px] hover:text-white hover:bg-[#274C5B] cursor-pointer"  style="border-bottom: 1px solid #274C5B;">Pages&nbsp;<i class="ri-arrow-down-s-line pt-[20px] text-[16px]"></i></div>
   <div class="nav_sub_2 space-y-3 pl-[40px] w-full">
       <div class="rounded-tl-[30px] rounded-bl-[30px] w-full h-auto p-[10px] pl-[20px] hover:text-white hover:bg-[#274C5B] cursor-pointer transition-[1.2s] hover:transition-[1.2s]"><a href="">Services</a></div>
       <div class="rounded-tl-[30px] rounded-bl-[30px] w-full h-auto p-[10px] pl-[20px] hover:text-white hover:bg-[#274C5B] cursor-pointer transition-[1.2s] hover:transition-[1.2s]"><a href="">Services Single</a></div>
       <div class="rounded-tl-[30px] rounded-bl-[30px] w-full h-auto p-[10px] pl-[20px] hover:text-white hover:bg-[#274C5B] cursor-pointer transition-[1.2s] hover:transition-[1.2s]"><a href="">Portfolio</a></div>
       <div class=" rounded-tl-[30px] rounded-bl-[30px]  w-full h-auto p-[10px] pl-[20px] hover:text-white hover:bg-[#274C5B] cursor-pointer transition-[1.2s] hover:transition-[1.2s]"><a href="">Our Team</a></div>
       <div class="rounded-tl-[30px] rounded-bl-[30px] w-full h-auto p-[10px] pl-[20px] hover:text-white hover:bg-[#274C5B] cursor-pointer transition-[1.2s] hover:transition-[1.2s]"><a href="">Blog</a></div>
   </div>
   <div class="shop_1 w-[100%] h-auto pl-[20px] p-[10px] hover:text-white hover:bg-[#274C5B] cursor-pointer border-b-2 border-b-[#274C5B]" style="border-top: 1px solid #274C5B;">Shop</div>
   <div class="w-[100%] h-auto pl-[20px] p-[10px] hover:text-white hover:bg-[#274C5B] cursor-pointer border-b-2 border-b-[#274C5B]">Project</div>
   <div class="w-[100%] h-auto pl-[20px] p-[10px] hover:text-white hover:bg-[#274C5B] cursor-pointer border-b-2 border-b-[#274C5B]">News</div>
</div>
`;
};
// NavBar Component


// Footer Component
function CreateFoot() {
  return `
  <div class="footer w-[100%] h-auto  flex justify-center items-center gap-[35px] flex-wrap my-[10px]">
  
         <div class="footer_1 w-[250px] h-[250px]  space-y-3">
         
         <div class="text-[#274C5B] text-[26px] font-bold w-[100%] flex items-center lg:items-end flex-col cursor-pointer">Contact Us</div>

         <div class="w-[100%] flex items-center lg:items-end flex-col">
         <div class="font-semibold text-[18px] text-[#333739] cursor-pointer">Email</div>
         <div class="text-[#525C60] cursor-pointer">needhelp@Organia.com</div>
         </div>
         
         <div class="text-[#333739] w-[100%] flex items-center lg:items-end flex-col">
         <div class="font-semibold  text-[18px] cursor-pointer">Phone</div>
         <div class="text-[#525C60] cursor-pointer">666 888 888</div>
         </div>
         
         <div class="text-[#333739] w-[100%] flex items-center lg:items-end flex-col">
         <div class="font-semibold text-[18px] cursor-pointer">Address</div>
         <div class="text-[#525C60] cursor-pointer">88 road, borklyn street, USA</div>
         </div>
      </div>
      
      <div class="footer_line w-[2px] h-[250px] bg-[#D4D4D4]  hidden lg:flex"></div>
      
      
      <div class="footer_2 w-[300px] h-[250px]  flex justify-start items-center flex-col space-y-3">
      
      <div class="cursor-pointer"><img src="./photo/nav_logo.svg" alt=""></div>

             <div class="text-center px-[5px] text-[#525C60] cursor-pointer">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing </div>
             
             <div class="flex justify-center items-center space-x-3 text-[22px] mt-[10px] text-[#274C5B] cursor-pointer">
             <div class="ri-instagram-line bg-[#c2d5c8] px-[10px] py-[5px]  rounded-[50px]"></div>
             <div class="ri-facebook-circle-fill bg-[#c2d5c8] px-[10px] py-[5px]  rounded-[50px]"></div>
             <div class="ri-twitter-fill bg-[#c2d5c8] px-[10px] py-[5px]  rounded-[50px]"></div>
             <div class="ri-pinterest-fill bg-[#c2d5c8] px-[10px] py-[5px]  rounded-[50px]"></div>
             </div>
             </div>
             
             <div class="footer_line w-[2px] h-[250px] bg-[#D4D4D4] hidden lg:flex"></div>
             
             <div class="footer_3 w-[250px] h-[250px]  text-[#525C60] space-y-3 flex flex-col items-center lg:items-start ">
             <div class="text-[#274C5B] text-[26px] font-bold cursor-pointer">Utility Pages</div>
             <div class="cursor-pointer">Style Guide</div>
             <div class="cursor-pointer"> 404 Not Found</div>
             <div class="cursor-pointer">Password Protected</div>
             <div class="cursor-pointer">Licences</div>
             <div class="cursor-pointer">Changelog</div>
             </div>
             </div>
             `
}
// Footer Component



export{CreateNav,CreateFoot};
