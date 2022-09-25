<template>
      <div>
        <div style="width:100%;display:flex;justify-content:center"></div>
        <div style="height:100%;min-height:100vh;width:100%;max-width:480px;background-color:#f2ece6;position:relative">
          <div
              style="position: fixed; top: 0px; width: 100%; max-width: 480px; font-size: 12px; background-color: rgba(0, 0, 0, 0.3); transition: height 1s ease 0s; height: 0px; color: rgb(249, 249, 249); display: flex; align-items: center; justify-content: center; z-index: 1000;">
            <span style="display: none;">배경음악이 준비되었습니다.</span></div>
          <div
              style="position:fixed;top:0;color:#fff;width:100%;font-size:12px;max-width:480px;z-index:10000;text-align:right">
            <div style="position: relative; top: -25px; display: inline-block; transition: top 1s ease 0s;">
              <div
                  style="font-size: 18px; width: 33px; height: 80px; display: inline-block; color: rgb(0, 0, 0); padding-top: 25px; padding-right: 15px; opacity: 0.5;">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="volume-mute"
                     class="svg-inline--fa fa-volume-mute fa-w-16 fa-18 " role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                        d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div style="padding-bottom:160px;box-shadow:0px 0px 18px rgb(0 0 0 / 18%)">
            <div style="padding-top:50px;padding-bottom:50px">
              <div class="text-focus-in" style="margin-top:30px"><span class="MainName"
                                                                       style="font-size:30px">김재욱</span> <span
                  class="MainName" style="font-size:20px;padding-left:10px;padding-right:10px">&amp;</span>
                <span class="MainName" style="font-size:30px">김은희</span></div>
              <div class="text-focus-in" style="color:#887f6e;font-family:Pretendard-Regular;font-size:14px">
                2022.05.14 SAT 1:00PM
              </div>
            </div>
            <div class="text-focus-in" style="position:relative;display:flex">
              <div style="position:absolute;top:0;bottom:none;display:flex;transform:rotate(180deg);width:100%">
                <svg class="waves" xmlns:xlink="http://www.w3.org/1999/xlink"
                     xmlnssvgjs="http://svgjs.dev/svgjs" viewBox="0 24 150 28" preserveAspectRatio="none"
                     shape-rendering="auto">
                  <defs>
                    <path id="pretty-wave"
                          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                  </defs>
                  <g class="waveG">
                    <use xlink:href="#pretty-wave" x="48" y="0" fill="rgba(242, 236, 230,0.7)"></use>
                    <use xlink:href="#pretty-wave" x="48" y="3" fill="rgba(242, 236, 230,0.5)"></use>
                    <use xlink:href="#pretty-wave" x="48" y="5" fill="rgba(242, 236, 230,0.3)"></use>
                    <use xlink:href="#pretty-wave" x="48" y="7" fill="rgba(242, 236, 230,0.2)"></use>
                  </g>
                </svg>
              </div>
              <img src="~@/assets/images/HYW09384.jpeg"
                   style="width:100%">
              <div style="position:absolute;top:none;bottom:0;display:flex;transform:rotate(0deg);width:100%">
                <svg class="waves" xmlns:xlink="http://www.w3.org/1999/xlink"
                     xmlnssvgjs="http://svgjs.dev/svgjs" viewBox="0 24 150 28" preserveAspectRatio="none"
                     shape-rendering="auto">
                  <defs>
                    <path id="pretty-wave"
                          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                  </defs>
                  <g class="waveG">
                    <use xlink:href="#pretty-wave" x="48" y="0" fill="rgba(242, 236, 230,0.7)"></use>
                    <use xlink:href="#pretty-wave" x="48" y="3" fill="rgba(242, 236, 230,0.5)"></use>
                    <use xlink:href="#pretty-wave" x="48" y="5" fill="rgba(242, 236, 230,0.3)"></use>
                    <use xlink:href="#pretty-wave" x="48" y="7" fill="rgba(242, 236, 230,0.2)"></use>
                  </g>
                </svg>
              </div>
            </div>
            <div style="color:#49301e;padding-top:100px">
              <div>
                <div data-aos="fade-up" style="text-align:center;padding-bottom:20px" class="aos-init"><img
                    src="/flower-8.png" style="width:40px"></div>
                <div data-aos="fade-up" class="max_invitation_content_medium__Vqv7F aos-init">각자 서로 다른 길을<br>걸어온
                  저희가 이제 부부의 연으로<br>한 길을 걸어가고자 합니다.<br><br>항상 처음을 생각하며,<br>서로 아껴주고 사랑하며 살겠습니다.<br><br>부디 참석해
                  주시어 저희의 약속을<br>따뜻한 격려로 축복해 주시기 바랍니다.
                </div>
              </div>
              <div data-aos="fade-up"
                   style="display:flex;align-items:center;justify-content:center;padding-top:20px"
                   class="aos-init">
                <div style="text-align:right"><p style="color:#49301e;width:100%">김종덕<!-- --> · <!-- -->김경숙
                  <!-- --> <span style="font-size:12px;color:#887f6e">의<!-- --> <span
                      style="width:30px;display:inline-block;text-align:center">아들</span></span> <span
                      style="min-width:31px;display:inline-block;text-align:center;color:#49301e">재욱</span>
                </p>
                  <p style="color:#49301e">김영배<!-- --> · <!-- -->권순화<!-- --> <span
                      style="font-size:12px;color:#887f6e">의<!-- --> <span
                      style="width:30px;display:inline-block;text-align:center">딸</span></span> <span
                      style="min-width:31px;display:inline-block;text-align:center;color:#49301e">은희</span>
                  </p></div>
              </div>
              <div data-aos="fade-up"
                   style="color:#49301e;font-size:0.9em;line-height:1.3em;width:100%;margin:0 auto;margin-top:2em"
                   class="aos-init">2022.11.27 일요일 오전 10시 30분 <br>노비아갈라 전자관 보타닉가든홀
              </div>
            </div>
            <div data-aos="fade-up" style="padding-bottom:50px;position:relative" class="aos-init">
              <div style="position:relative;margin-top:100px">
                <div
                    style="font-size:11px;color:#fff;position:absolute;z-index:1000;right:10px;top:40px;background-color:rgba(0,0,0,0.6);border-radius:5px;padding:0px 5px 10px">
                  <div style="width:120px;height:40px;overflow:hidden;margin:0 auto;outline:none" title=""
                       role="button" aria-label="animation" tabindex="0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600"
                         preserveAspectRatio="xMidYMid slice"
                         style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
                      <defs>
                        <clipPath id="__lottie_element_2">
                          <rect width="600" height="600" x="0" y="0"></rect>
                        </clipPath>
                      </defs>
                      <g clip-path="url(#__lottie_element_2)">
                        <g transform="matrix(1,0,0,1,130,320)" opacity="1" style="display: block;">
                          <g opacity="1" transform="matrix(1,0,0,1,30,0)">
                            <path fill="rgb(255,0,0)" fill-opacity="1" d="M0 0"></path>
                            <path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0"
                                  stroke-miterlimit="4" stroke="rgb(35,181,229)" stroke-opacity="1"
                                  stroke-width="24"
                                  d=" M52.7599983215332,-34.97600173950195 C109.25700378417969,-34.97600173950195 170.28900146484375,-34.97600173950195 219.56900024414062,-34.97600173950195"></path>
                          </g>
                        </g>
                        <g transform="matrix(1,0,0,1,162,320)" opacity="0.10121159525774502"
                           style="display: block;">
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path fill="rgb(255,0,0)" fill-opacity="1" d="M0 0"></path>
                            <path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0"
                                  stroke-miterlimit="4" stroke="rgb(52,207,187)" stroke-opacity="1"
                                  stroke-width="24"
                                  d=" M89.22100067138672,-34.97600173950195 C130.3000030517578,-34.97600173950195 171.9250030517578,-34.97600173950195 208.21400451660156,-34.97600173950195"></path>
                          </g>
                        </g>
                        <g transform="matrix(0.9993054866790771,-0.037262558937072754,0.037262558937072754,0.9993054866790771,-753.3515625,-176.538818359375)"
                           opacity="1" style="display: block;">
                          <g opacity="1"
                             transform="matrix(1,0,0,1,949.7659912109375,500.7019958496094)">
                            <path fill="rgb(255,255,255)" fill-opacity="1" d="M0 0"></path>
                          </g>
                          <g opacity="1"
                             transform="matrix(1,0,0,1,959.1270141601562,546.02099609375)">
                            <path fill="rgb(195,195,195)" fill-opacity="1"
                                  d=" M-17.347999572753906,-39.750999450683594 C-17.347999572753906,-39.750999450683594 -17.347999572753906,10.348999977111816 -17.347999572753906,10.348999977111816 C-17.347999572753906,10.748000144958496 -17.547000885009766,11.149999618530273 -18.047000885009766,11.348999977111816 C-18.445999145507812,11.548999786376953 -18.847999572753906,11.45199966430664 -19.246999740600586,11.151000022888184 C-19.246999740600586,11.151000022888184 -26.950000762939453,3.246999979019165 -26.950000762939453,3.246999979019165 C-29.551000595092773,0.6460000276565552 -33.64899826049805,0.24699999392032623 -36.75,2.3489999771118164 C-38.55099868774414,3.5490000247955322 -39.750999450683594,5.548999786376953 -40.05099868774414,7.651000022888184 C-40.35200119018555,9.85099983215332 -39.750999450683594,12.048999786376953 -38.35200119018555,13.753999710083008 C-38.35200119018555,13.753999710083008 -19.051000595092773,37.05400085449219 -19.051000595092773,37.05400085449219 C-13.550999641418457,43.654998779296875 -5.551000118255615,47.45199966430664 3.049999952316284,47.45199966430664 C3.049999952316284,47.45199966430664 15.050999641418457,47.45199966430664 15.050999641418457,47.45199966430664 C21.75,47.45199966430664 28.15399932861328,44.849998474121094 32.85200119018555,40.05400085449219 C37.65399932861328,35.25199890136719 40.25,28.95199966430664 40.25,22.25200080871582 C40.25,22.25200080871582 40.35200119018555,-1.6549999713897705 40.35200119018555,-1.6549999713897705 C40.35200119018555,-5.854000091552734 36.952999114990234,-9.255999565124512 32.749000549316406,-9.255999565124512 C30.049999237060547,-9.255999565124512 27.64699935913086,-7.85699987411499 26.249000549316406,-5.65500020980835 C26.249000549316406,-5.65500020980835 26.249000549316406,-5.854000091552734 26.249000549316406,-5.854000091552734 C26.249000549316406,-10.053000450134277 22.850000381469727,-13.553000450134277 18.548999786376953,-13.553000450134277 C15.850000381469727,-13.553000450134277 13.447999954223633,-12.154000282287598 12.050000190734863,-9.951000213623047 C12.050000190734863,-9.951000213623047 12.050000190734863,-10.151000022888184 12.050000190734863,-10.151000022888184 C12.050000190734863,-14.35099983215332 8.652999877929688,-17.850000381469727 4.3520002365112305,-17.850000381469727 C1.6519999504089355,-17.850000381469727 -0.7490000128746033,-16.451000213623047 -2.1480000019073486,-14.248000144958496 C-2.1480000019073486,-14.248000144958496 -2.1480000019073486,-39.85300064086914 -2.1480000019073486,-39.85300064086914 C-2.1480000019073486,-41.85300064086914 -2.950000047683716,-43.85300064086914 -4.3480000495910645,-45.250999450683594 C-5.747000217437744,-46.650001525878906 -7.747000217437744,-47.45100021362305 -9.746999740600586,-47.45100021362305 C-13.946000099182129,-47.45100021362305 -17.347999572753906,-44.051998138427734 -17.347999572753906,-39.750999450683594z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span>밀어서 갤러리 사진 보기</span></div>
                <div class="swiper swiper-initialized swiper-horizontal swiper-ios">
                  <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"><span
                      class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span
                      class="swiper-pagination-bullet"></span><span
                      class="swiper-pagination-bullet"></span><span
                      class="swiper-pagination-bullet"></span><span
                      class="swiper-pagination-bullet"></span><span
                      class="swiper-pagination-bullet"></span><span
                      class="swiper-pagination-bullet"></span><span
                      class="swiper-pagination-bullet"></span><span
                      class="swiper-pagination-bullet"></span><span
                      class="swiper-pagination-bullet"></span></div>
                  <div class="swiper-wrapper"
                       style="transform: translate3d(-390px, 0px, 0px); transition-duration: 0ms;">
                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                         data-swiper-slide-index="9" style="padding-bottom: 35px; width: 390px;"><img
                        src="/place-holder.png" style="width:100%;height:620px;object-fit:contain"
                        class="cryu-lazy-loading"></div>
                    <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0"
                         style="padding-bottom: 35px; width: 390px;"><img
                        src="https://self-cryucard.s3-ap-northeast-2.amazonaws.com/2021-06-20/51543483-e6317039-b70d-4385-a512-d19785cfd43d.jpeg"
                        style="width:100%;height:620px;object-fit:contain" class="cryu-lazy-loaded">
                    </div>
                    <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1"
                         style="padding-bottom: 35px; width: 390px;"><img src="/place-holder.png"
                                                                          style="width:100%;height:620px;object-fit:contain"
                                                                          class="cryu-lazy-loading"></div>
                    <div class="swiper-slide" data-swiper-slide-index="2"
                         style="padding-bottom: 35px; width: 390px;"><img src="/place-holder.png"
                                                                          style="width:100%;height:620px;object-fit:contain"
                                                                          class="cryu-lazy-loading"></div>
                    <div class="swiper-slide" data-swiper-slide-index="3"
                         style="padding-bottom: 35px; width: 390px;"><img src="/place-holder.png"
                                                                          style="width:100%;height:620px;object-fit:contain"
                                                                          class="cryu-lazy-loading"></div>
                    <div class="swiper-slide" data-swiper-slide-index="4"
                         style="padding-bottom: 35px; width: 390px;"><img src="/place-holder.png"
                                                                          style="width:100%;height:620px;object-fit:contain"
                                                                          class="cryu-lazy-loading"></div>
                    <div class="swiper-slide" data-swiper-slide-index="5"
                         style="padding-bottom: 35px; width: 390px;"><img src="/place-holder.png"
                                                                          style="width:100%;height:620px;object-fit:contain"
                                                                          class="cryu-lazy-loading"></div>
                    <div class="swiper-slide" data-swiper-slide-index="6"
                         style="padding-bottom: 35px; width: 390px;"><img src="/place-holder.png"
                                                                          style="width:100%;height:620px;object-fit:contain"
                                                                          class="cryu-lazy-loading"></div>
                    <div class="swiper-slide" data-swiper-slide-index="7"
                         style="padding-bottom: 35px; width: 390px;"><img src="/place-holder.png"
                                                                          style="width:100%;height:620px;object-fit:contain"
                                                                          class="cryu-lazy-loading"></div>
                    <div class="swiper-slide" data-swiper-slide-index="8"
                         style="padding-bottom: 35px; width: 390px;"><img src="/place-holder.png"
                                                                          style="width:100%;height:620px;object-fit:contain"
                                                                          class="cryu-lazy-loading"></div>
                    <div class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="9"
                         style="padding-bottom: 35px; width: 390px;"><img src="/place-holder.png"
                                                                          style="width:100%;height:620px;object-fit:contain"
                                                                          class="cryu-lazy-loading"></div>
                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                         data-swiper-slide-index="0" style="padding-bottom: 35px; width: 390px;"><img
                        src="/place-holder.png" style="width:100%;height:620px;object-fit:contain"
                        class="cryu-lazy-loading"></div>
                  </div>
                </div>
                <div style="position:absolute;top:294px;left:10px;z-index:10000;cursor:pointer">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
                       class="svg-inline--fa fa-chevron-left fa-w-10 " role="img"
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                       style="height:15px;color:#333">
                    <path fill="currentColor"
                          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                  </svg>
                </div>
                <div style="position:absolute;top:294px;right:10px;z-index:10000;cursor:pointer">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"
                       class="svg-inline--fa fa-chevron-right fa-w-10 " role="img"
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                       style="height:15px;color:#333">
                    <path fill="currentColor"
                          d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" class="aos-init">
              <div class="calendar" style="margin-bottom:0"><p
                  style="padding-bottom:10px;color:#49301e;border-bottom:1px dashed">
                <p style="margin: 0px; font-size: 24px;">5월 14일</p>
                <p style="margin: 0px; font-size: 14px;">토요일 오후 1시 </p>
                <div style="font-family: Pretendard-Regular;"><span
                    class="calendar-division calendar-day">SUN</span><span
                    class="calendar-division calendar-day">MON</span><span
                    class="calendar-division calendar-day">TUE</span><span
                    class="calendar-division calendar-day">WED</span><span
                    class="calendar-division calendar-day">THU</span><span
                    class="calendar-division calendar-day">FRI</span><span
                    class="calendar-division calendar-day">SAT</span></div>
                <div class="calendar-height">
                  <div class="calendar-division calendar-num "><span class=" ">1</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">2</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">3</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">4</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">5</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">6</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">7</span></div>
                </div>
                <div class="calendar-height">
                  <div class="calendar-division calendar-num "><span class=" ">8</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">9</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">10</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">11</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">12</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">13</span></div>
                  <div class="calendar-division calendar-num "><span class="selected ">14</span></div>
                </div>
                <div class="calendar-height">
                  <div class="calendar-division calendar-num "><span class=" ">15</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">16</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">17</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">18</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">19</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">20</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">21</span></div>
                </div>
                <div class="calendar-height">
                  <div class="calendar-division calendar-num "><span class=" ">22</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">23</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">24</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">25</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">26</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">27</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">28</span></div>
                </div>
                <div class="calendar-height">
                  <div class="calendar-division calendar-num "><span class=" ">29</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">30</span></div>
                  <div class="calendar-division calendar-num "><span class=" ">31</span></div>
                  <div class="calendar-division calendar-num "><span class=" grayed">1</span></div>
                  <div class="calendar-division calendar-num "><span class=" grayed">2</span></div>
                  <div class="calendar-division calendar-num "><span class=" grayed">3</span></div>
                  <div class="calendar-division calendar-num "><span class=" grayed">4</span></div>
                </div>
              </div>
              <div style="background-color:#f9f9f9;margin-top:30px" data-aos="fade-up" class="aos-init"><p
                  style="padding:7px 0;margin:0;font-size:14px;color:#333">재욱<!-- --> <span
                  style="color:#ffa3a3">♥</span> <!-- -->은희<!-- --> 의 결혼식이<!-- --> <span
                  style="font-weight:500">133<!-- -->일</span> 지났습니다.</p></div>
            </div>
            <div style="margin-top:100px">
              <div data-aos="fade-up" class="text-focus-in aos-init"
                   style="font-size:20px;margin-bottom:10px;width:23px;height:30px;text-align:center;margin:0px auto;color:#49301e">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
                     class="svg-inline--fa fa-map-marker-alt fa-w-12 " role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                </svg>
              </div>
              <h3 data-aos="fade-up" style="font-weight:bold;font-size:18px;color:#49301e;margin-bottom:0.6em"
                  class="aos-init">노비아갈라 전자관<!-- --> <!-- -->보타닉가든홀</h3>
              <div data-aos="fade-up"
                   style="padding-bottom:3em;font-size:14px;padding-left:16px;padding-right:16px;color:#49301e"
                   class="aos-init"><span style="word-break:keep-all">서울 강남구 선릉로 321</span><br><span>Tel.<!-- -->02-412-0000</span><br>
              </div>
            </div>
            <div data-aos="fade-up" class="aos-init">
              <div style="position:relative">
                <div id="map"
                     style="width: 100%; height: 325px; position: relative; overflow: hidden; background: url(&quot;https://ssl.pstatic.net/static/maps/mantle/2x/pattern_1.png&quot;) 0px 0px repeat transparent;"
                     tabindex="0">
                  <div
                      style="position: absolute; display: block; margin: 0px; padding: 0px; border: 0px none; top: 0px; left: 0px; overflow: visible; width: 100%; height: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); z-index: 0; cursor: url(&quot;https://ssl.pstatic.net/static/maps/mantle/2x/openhand.cur&quot;), default;">
                    <div
                        style="position: absolute; display: block; margin: 0px; padding: 0px; border: 0px none; top: 0px; left: 0px; overflow: visible; width: 100%; height: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); z-index: 0;">
                      <div
                          style="overflow: visible; width: 100%; height: 0px; position: absolute; display: block; margin: 0px; padding: 0px; border: 0px none; top: 0px; left: 0px; z-index: 1;">
                        <div
                            style="overflow: visible; width: 100%; height: 0px; position: absolute; display: none; margin: 0px; padding: 0px; border: 0px none; top: 0px; left: 0px; z-index: 0; user-select: none;"></div>
                        <div
                            style="overflow: visible; width: 100%; height: 0px; position: absolute; display: block; margin: 0px; padding: 0px; border: 0px none; top: 0px; left: 0px; z-index: 1; user-select: none;">
                          <div
                              style="position: absolute; top: 0px; left: 0px; z-index: 0; margin: 0px; padding: 0px; border: 0px solid transparent; display: block; width: 0px; height: 0px; overflow: visible; box-sizing: content-box !important;">
                            <div draggable="false" unselectable="on"
                                 style="position: absolute; top: 80px; left: 60px; z-index: 0; margin: 0px; padding: 0px; border: 0px solid transparent; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; transform: translateZ(0px); opacity: 1; width: 256px; height: 256px;">
                              <img draggable="false" unselectable="on" alt=""
                                   crossorigin="anonymous" width="256" height="256"
                                   src="https://nrbe.pstatic.net/styles/basic/1663918673/15/27948/12697@2x.png?mt=bg.ol.sw.ar.lko"
                                   style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; max-width: none !important; max-height: none !important; min-width: 0px !important; min-height: 0px !important; opacity: 1; position: absolute; left: 0px; top: 0px; z-index: 0; width: 256px; height: 256px;">
                            </div>
                            <div draggable="false" unselectable="on"
                                 style="position: absolute; top: 336px; left: 60px; z-index: 0; margin: 0px; padding: 0px; border: 0px solid transparent; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; transform: translateZ(0px); opacity: 1; width: 256px; height: 256px;">
                              <img draggable="false" unselectable="on" alt=""
                                   crossorigin="anonymous" width="256" height="256"
                                   src="https://nrbe.pstatic.net/styles/basic/1663918673/15/27948/12698@2x.png?mt=bg.ol.sw.ar.lko"
                                   style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; max-width: none !important; max-height: none !important; min-width: 0px !important; min-height: 0px !important; opacity: 1; position: absolute; left: 0px; top: 0px; z-index: 0; width: 256px; height: 256px;">
                            </div>
                            <div draggable="false" unselectable="on"
                                 style="position: absolute; top: -176px; left: 60px; z-index: 0; margin: 0px; padding: 0px; border: 0px solid transparent; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; transform: translateZ(0px); opacity: 1; width: 256px; height: 256px;">
                              <img draggable="false" unselectable="on" alt=""
                                   crossorigin="anonymous" width="256" height="256"
                                   src="https://nrbe.pstatic.net/styles/basic/1663918673/15/27948/12696@2x.png?mt=bg.ol.sw.ar.lko"
                                   style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; max-width: none !important; max-height: none !important; min-width: 0px !important; min-height: 0px !important; opacity: 1; position: absolute; left: 0px; top: 0px; z-index: 0; width: 256px; height: 256px;">
                            </div>
                            <div draggable="false" unselectable="on"
                                 style="position: absolute; top: -176px; left: 316px; z-index: 0; margin: 0px; padding: 0px; border: 0px solid transparent; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; transform: translateZ(0px); opacity: 1; width: 256px; height: 256px;">
                              <img draggable="false" unselectable="on" alt=""
                                   crossorigin="anonymous" width="256" height="256"
                                   src="https://nrbe.pstatic.net/styles/basic/1663918673/15/27949/12696@2x.png?mt=bg.ol.sw.ar.lko"
                                   style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; max-width: none !important; max-height: none !important; min-width: 0px !important; min-height: 0px !important; opacity: 1; position: absolute; left: 0px; top: 0px; z-index: 0; width: 256px; height: 256px;">
                            </div>
                            <div draggable="false" unselectable="on"
                                 style="position: absolute; top: 336px; left: -196px; z-index: 0; margin: 0px; padding: 0px; border: 0px solid transparent; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; transform: translateZ(0px); opacity: 1; width: 256px; height: 256px;">
                              <img draggable="false" unselectable="on" alt=""
                                   crossorigin="anonymous" width="256" height="256"
                                   src="https://nrbe.pstatic.net/styles/basic/1663918673/15/27947/12698@2x.png?mt=bg.ol.sw.ar.lko"
                                   style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; max-width: none !important; max-height: none !important; min-width: 0px !important; min-height: 0px !important; opacity: 1; position: absolute; left: 0px; top: 0px; z-index: 0; width: 256px; height: 256px;">
                            </div>
                            <div draggable="false" unselectable="on"
                                 style="position: absolute; top: 80px; left: 316px; z-index: 0; margin: 0px; padding: 0px; border: 0px solid transparent; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; transform: translateZ(0px); opacity: 1; width: 256px; height: 256px;">
                              <img draggable="false" unselectable="on" alt=""
                                   crossorigin="anonymous" width="256" height="256"
                                   src="https://nrbe.pstatic.net/styles/basic/1663918673/15/27949/12697@2x.png?mt=bg.ol.sw.ar.lko"
                                   style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; max-width: none !important; max-height: none !important; min-width: 0px !important; min-height: 0px !important; opacity: 1; position: absolute; left: 0px; top: 0px; z-index: 0; width: 256px; height: 256px;">
                            </div>
                            <div draggable="false" unselectable="on"
                                 style="position: absolute; top: 80px; left: -196px; z-index: 0; margin: 0px; padding: 0px; border: 0px solid transparent; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; transform: translateZ(0px); opacity: 1; width: 256px; height: 256px;">
                              <img draggable="false" unselectable="on" alt=""
                                   crossorigin="anonymous" width="256" height="256"
                                   src="https://nrbe.pstatic.net/styles/basic/1663918673/15/27947/12697@2x.png?mt=bg.ol.sw.ar.lko"
                                   style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; max-width: none !important; max-height: none !important; min-width: 0px !important; min-height: 0px !important; opacity: 1; position: absolute; left: 0px; top: 0px; z-index: 0; width: 256px; height: 256px;">
                            </div>
                            <div draggable="false" unselectable="on"
                                 style="position: absolute; top: 336px; left: 316px; z-index: 0; margin: 0px; padding: 0px; border: 0px solid transparent; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; transform: translateZ(0px); opacity: 1; width: 256px; height: 256px;">
                              <img draggable="false" unselectable="on" alt=""
                                   crossorigin="anonymous" width="256" height="256"
                                   src="https://nrbe.pstatic.net/styles/basic/1663918673/15/27949/12698@2x.png?mt=bg.ol.sw.ar.lko"
                                   style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; max-width: none !important; max-height: none !important; min-width: 0px !important; min-height: 0px !important; opacity: 1; position: absolute; left: 0px; top: 0px; z-index: 0; width: 256px; height: 256px;">
                            </div>
                            <div draggable="false" unselectable="on"
                                 style="position: absolute; top: -176px; left: -196px; z-index: 0; margin: 0px; padding: 0px; border: 0px solid transparent; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; transform: translateZ(0px); opacity: 1; width: 256px; height: 256px;">
                              <img draggable="false" unselectable="on" alt=""
                                   crossorigin="anonymous" width="256" height="256"
                                   src="https://nrbe.pstatic.net/styles/basic/1663918673/15/27947/12696@2x.png?mt=bg.ol.sw.ar.lko"
                                   style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; max-width: none !important; max-height: none !important; min-width: 0px !important; min-height: 0px !important; opacity: 1; position: absolute; left: 0px; top: 0px; z-index: 0; width: 256px; height: 256px;">
                            </div>
                          </div>
                        </div>
                        <div
                            style="overflow: visible; width: 100%; height: 0px; position: absolute; display: block; margin: 0px; padding: 0px; border: 0px none; top: 0px; left: 0px; z-index: 100;">
                          <div
                              style="overflow: visible; width: 100%; height: 0px; position: absolute; display: block; margin: 0px; padding: 0px; border: 0px none; top: 0px; left: 0px; z-index: 101;"></div>
                          <div
                              style="overflow: visible; width: 100%; height: 0px; position: absolute; display: block; margin: 0px; padding: 0px; border: 0px none; top: 0px; left: 0px; z-index: 103;">
                            <div title=""
                                 style="position: absolute; overflow: hidden; box-sizing: content-box !important; cursor: inherit; left: 184px; top: 130px; width: 22px; height: 33px;">
                              <map name="nmarker-2496A397-C0F6-41AD-AB97-B3782DDD534F">
                                <area href="#" shape="poly"
                                      coords="11,0,9,0,6,1,4,2,2,4,0,8,0,12,1,14,2,16,5,19,5,20,6,23,8,26,9,30,9,34,13,34,13,30,14,26,16,23,17,20,17,19,20,16,21,14,22,12,22,12,22,8,20,4,18,2,16,1,13,0"
                                      alt="마커의 경위도는 127.05169767079008,37.498190068032606 입니다."
                                      style="display: block; cursor: pointer;">
                              </map>
                              <img draggable="false" unselectable="on"
                                   src="https://ssl.pstatic.net/static/maps/mantle/2x/marker-default.png"
                                   alt=""
                                   style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; user-select: none; -webkit-user-drag: none; box-sizing: content-box !important; max-width: none !important; max-height: none !important; min-width: 0px !important; min-height: 0px !important; position: absolute; cursor: inherit; width: 22px; height: 33px; left: 0px; top: 0px;"><img
                                src="https://ssl.pstatic.net/static/maps/mantle/2x/dot.gif"
                                alt="" usemap="#nmarker-2496A397-C0F6-41AD-AB97-B3782DDD534F"
                                style="position: absolute; border: 0px; left: 0px; top: 0px; max-width: none !important; max-height: none !important; min-width: 0px !important; min-height: 0px !important; user-select: none; width: 22px; height: 33px;">
                            </div>
                          </div>
                          <div
                              style="overflow: visible; width: 100%; height: 0px; position: absolute; display: block; margin: 0px; padding: 0px; border: 0px none; top: 0px; left: 0px; z-index: 106;"></div>
                        </div>
                      </div>
                      <div
                          style="position: absolute; display: none; margin: 0px; padding: 0px; border: 0px none; top: 0px; left: 0px; overflow: visible; width: 100%; height: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); background-color: rgb(255, 255, 255); z-index: 10000; opacity: 0.5;"></div>
                    </div>
                  </div>
                  <div
                      style="position: absolute; z-index: 100; margin: 0px; padding: 0px; pointer-events: none; bottom: 0px; right: 0px;">
                    <div
                        style="border: 0px none; margin: 0px; padding: 0px; pointer-events: none; float: right; height: 21px;">
                      <div
                          style="position: relative; width: 79px; height: 14px; margin: 0px 12px 7px 2px; overflow: hidden; pointer-events: auto;">
                        <span
                            style="display:block;margin:0;padding:0 4px;text-align:center;font-size:10px;line-height:11px;font-family:Helvetica,AppleSDGothicNeo-Light,nanumgothic,NanumGothic,&quot;나눔고딕&quot;,Dotum,&quot;돋움&quot;,sans-serif;font-weight:bold;color:#000;text-shadow:-1px 0 rgba(255, 255, 255, 0.3), 0 1px rgba(255, 255, 255, 0.3), 1px 0 rgba(255, 255, 255, 0.3), 0 -1px rgba(255, 255, 255, 0.3);">300m</span><img
                          src="https://ssl.pstatic.net/static/maps/mantle/2x/scale-normal-b.png"
                          width="71" height="4" alt=""
                          style="position: absolute; left: 4px; bottom: 0px; z-index: 2; display: block; width: 71px; height: 4px; overflow: hidden; margin: 0px; padding: 0px; border: 0px none; max-width: none !important; max-height: none !important; min-width: 0px !important; min-height: 0px !important;"><img
                          src="https://ssl.pstatic.net/static/maps/mantle/2x/scale-normal-l.png"
                          width="4" height="10" alt=""
                          style="position:absolute;left:0;bottom:0;z-index:2;display:block;width:4px;height:10px;overflow:hidden;margin:0;padding:0;border:0 none;max-width:none !important;max-height:none !important;min-width:0 !important;min-height:0 !important;"><img
                          src="https://ssl.pstatic.net/static/maps/mantle/2x/scale-normal-r.png"
                          width="4" height="10" alt=""
                          style="position:absolute;right:0;bottom:0;z-index:2;display:block;width:4px;height:10px;overflow:hidden;margin:0;padding:0;border:0 none;max-width:none !important;max-height:none !important;min-width:0 !important;min-height:0 !important;">
                      </div>
                    </div>
                    <div
                        style="border: 0px none; margin: -1px 0px 0px; padding: 0px; pointer-events: none; float: right; height: 22px;">
                      <a href="https://ssl.pstatic.net/static/maps/mantle/notice/legal.html"
                         target="_blank"
                         style="display: block; width: 48px; height: 17px; overflow: hidden; margin: 0px 5px 5px 12px; pointer-events: auto;"><img
                          src="https://ssl.pstatic.net/static/maps/mantle/2x/naver-normal-new.png"
                          width="48" height="17" alt="NAVER"
                          style="display:block;width:48px;height:17px;overflow:hidden;border:0 none;margin:0;padding:0;max-width:none !important;max-height:none !important;min-width:0 !important;min-height:0 !important;"></a>
                    </div>
                  </div>
                  <div
                      style="position: absolute; z-index: 100; margin: 0px; padding: 0px; pointer-events: none; bottom: 0px; left: 0px;">
                    <div
                        style="border: 0px none; margin: 0px; padding: 0px; pointer-events: none; float: left; height: 19px;">
                      <div class="map_copyright"
                           style="margin: 0px; padding: 0px 0px 2px 10px; height: 19px; line-height: 19px; color: rgb(68, 68, 68); font-family: Helvetica, AppleSDGothicNeo-Light, nanumgothic, NanumGothic, 나눔고딕, Dotum, 돋움, sans-serif; font-size: 11px; clear: both; white-space: nowrap; pointer-events: none;">
                        <div style="float: left;"><span
                            style="white-space: pre; color: rgb(68, 68, 68);">© NAVER Corp.</span>
                        </div>
                        <a href="#"
                           style="font-family: Helvetica, AppleSDGothicNeo-Light, nanumgothic, NanumGothic, 나눔고딕, Dotum, 돋움, sans-serif; font-size: 11px; line-height: 19px; margin: 0px 0px 0px 5px; padding: 0px; color: rgb(68, 68, 68); float: left; pointer-events: auto; text-decoration: underline; display: none;">더보기</a>
                        <div style="float: left;"><a target="_blank"
                                                     href="http://www.openstreetmap.org/copyright"
                                                     style="pointer-events: auto; white-space: pre; display: none; color: rgb(68, 68, 68);">
                          /OpenStreetMap</a></div>
                      </div>
                    </div>
                  </div>
                  <div
                      style="border: 1px solid rgb(41, 41, 48); background: rgb(255, 255, 255); padding: 15px; color: rgb(51, 51, 51); position: absolute; font-size: 11px; line-height: 1.5; clear: both; display: none; max-width: 350px !important; max-height: 300px !important;">
                    <h5 style="font-size: 12px; margin-top: 0px; margin-bottom: 10px;">지도 데이터</h5><a
                      href="#"
                      style="position: absolute; top: 8px; right: 8px; width: 14px; height: 14px; font-size: 14px; line-height: 14px; display: block; overflow: hidden; color: rgb(68, 68, 68); text-decoration: none; font-weight: bold; text-align: center;">x</a>
                    <div><span
                        style="white-space: pre; color: rgb(68, 68, 68); float: left;">© NAVER Corp.</span><a
                        target="_blank" href="http://www.openstreetmap.org/copyright"
                        style="pointer-events: auto; white-space: pre; color: rgb(68, 68, 68); float: left; display: none;">
                      /OpenStreetMap</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up"
                 style="font-size:14px;font-weight:bold;padding-top:20px;padding-bottom:5px;display:flex;align-items:center;justify-content:center"
                 class="aos-init"><a
                href="https://map.kakao.com/link/map/크류웨딩홀,37.498190068032606,127.05169767079008"
                target="_blank">
              <div style="display:flex;align-items:center;justify-content:center;padding:0px 5px;padding-right:10px">
                <img src="/kakao-navi.png" style="width:30px"><span>카카오맵</span></div>
            </a><a
                href="http://map.naver.com/index.nhn?enc=utf8&amp;level=2&amp;lng=127.05169767079008&amp;lat=37.498190068032606&amp;pinTitle=크류웨딩홀&amp;pinType=SITE"
                target="_blank">
              <div style="display:flex;align-items:center;justify-content:center;padding:0px 5px"><img
                  src="/naver-map.png" style="width:30px"><span>네이버지도</span></div>
            </a></div>
            <div>
              <div data-aos="fade-up" class="mapRoot aos-init"
                   style="padding-top:10px;padding-left:20px;padding-right:20px;text-align:left"><h3
                  style="color:#49301e"
                  class="MapRootComponent_title_font_size_medium__zt_zS MapRootComponent_map_root_title__EOl2W">
                버스</h3>
                <p style="line-height:1.5em;word-break:keep-all;margin:0"
                   class="MapRootComponent_content_font_size_medium__UVSM6">간선 : 301, 342, 472<br>지선 : 3011,
                  4412<br>영동고교 앞 하차 후 학동사거리 방면 100M내 건물</p>
                <h3 style="color:#49301e"
                    class="MapRootComponent_title_font_size_medium__zt_zS MapRootComponent_map_root_title__EOl2W">
                  지하철</h3>
                <p style="line-height:1.5em;word-break:keep-all;margin:0"
                   class="MapRootComponent_content_font_size_medium__UVSM6">강남구청역 3-1번 출구<br>GE코리아 좌측방향으로
                  600M(도보 9분)</p>
                <h3 style="color:#49301e"
                    class="MapRootComponent_title_font_size_medium__zt_zS MapRootComponent_map_root_title__EOl2W">
                  셔틀버스</h3>
                <p style="line-height:1.5em;word-break:keep-all;margin:0"
                   class="MapRootComponent_content_font_size_medium__UVSM6">강남구청역(7호선, 분당선) 3번 출구 앞<br>※ 교통이
                  혼잡하오니 가급적 대중교통을 이용해주시길 바랍니다.</p></div>
            </div>
            <div data-aos="fade-up" class="aos-init">
              <div class="mapRoot" style="padding-left:20px;padding-right:20px;text-align:left;color:#333">
                <div
                    style="margin-top:50px;padding:20px 10px;text-align:center;line-height:1.5em;border-radius:5px;background-color:#f9f9f9;box-shadow:1px 1px 3px rgb(0 0 0 / 7%)">
                  <p style="font-weight:bold;font-size:16px;color:#49301e;display:inline-block;padding-bottom:10px;margin:0">
                    드리고 싶은 말씀</p><br>
                  <p style="font-size:14px;margin:0">코로나19가 장기화되면서<br>종식을 예측할 수 없어 많은 고민 끝에<br>결혼식을 예정대로 진행하게
                    되었습니다.<br><br>혹여나 청첩장 전달이 누가 되지 않을지<br>걱정이 많지만 참석이 어려우시더라도<br>멀리서 축하해주시는 마음<br>감사히
                    받겠습니다.</p></div>
              </div>
            </div>
            <div data-aos="fade-up" style="margin-top:100px" class="aos-init">
              <div>
                <div class="swiper-comment"><p
                    style="font-size:26px;margin:0;padding-bottom:40px;color:#333;font-family:Nanum Pen Script">
                  방명록</p>
                  <div class="swiper swiper-initialized swiper-horizontal swiper-ios swiper-backface-hidden">
                    <div class="swiper-wrapper"
                         style="transition-duration: 0ms; transform: translate3d(10px, 0px, 0px);">
                      <div class="swiper-slide comment-swiper-slide swiper-slide-active"
                           style="width: 171.818px; margin-right: 10px;">
                        <div class="comment-container" style="background-color:#fff"><p
                            style="margin:0;padding-bottom:5px">🌷</p>
                          <p class="comment-content"><span
                              style="width:100%;height:136px;padding:0 3px;overflow:hidden">바쁘게 결혼 준비하면서도 행복해하는 모습을 보니까 정말 나도 기쁘다! 💜 인생에서 가장 큰 기쁨과 축복이 함께하길 바랄게 🙏</span><span
                              style="height:20px;width:100%;margin-bottom:5px">- <!-- -->크류
                            <!-- --> -</span></p>
                          <p class="comment-date">5월 16일 19:14</p></div>
                      </div>
                      <div class="swiper-slide comment-swiper-slide swiper-slide-next"
                           style="width: 171.818px; margin-right: 10px;">
                        <div class="comment-container" style="background-color:#fff"><p
                            style="margin:0;padding-bottom:5px">🌻</p>
                          <p class="comment-content"><span
                              style="width:100%;height:136px;padding:0 3px;overflow:hidden">선배님 결혼 진심으로 축하드려요~🎉 예쁘게 오순도순 행복한 가정 잘 꾸려가시길 응원할게요! 😆 꽃 길만 걸으세요 🌸</span><span
                              style="height:20px;width:100%;margin-bottom:5px">- <!-- -->민정
                            <!-- --> -</span></p>
                          <p class="comment-date">5월 16일 19:13</p></div>
                      </div>
                      <div class="swiper-slide comment-swiper-slide"
                           style="width: 171.818px; margin-right: 10px;">
                        <div class="comment-container" style="background-color:#fff"><p
                            style="margin:0;padding-bottom:5px">🌳</p>
                          <p class="comment-content"><span
                              style="width:100%;height:136px;padding:0 3px;overflow:hidden">결혼이란 하늘에서 맺어지고 땅에서 완성된다고 했어요 ☁️ 두 사람이라는 원석이 만나 보석 같은 인생으로 함께 만들어가시길 진심으로 바랍니다 💫</span><span
                              style="height:20px;width:100%;margin-bottom:5px">- <!-- -->지현
                            <!-- --> -</span></p>
                          <p class="comment-date">5월 16일 19:13</p></div>
                      </div>
                      <div class="swiper-slide comment-swiper-slide"
                           style="width: 171.818px; margin-right: 10px;">
                        <div class="comment-container" style="background-color:#fff"><p
                            style="margin:0;padding-bottom:5px">🌼</p>
                          <p class="comment-content"><span
                              style="width:100%;height:136px;padding:0 3px;overflow:hidden">형부, 데려가줘서 고맙습니다 :) 언니를 잘 부탁드려요 🔮

</span><span style="height:20px;width:100%;margin-bottom:5px">- <!-- -->지연<!-- --> -</span></p>
                          <p class="comment-date">5월 16일 19:13</p></div>
                      </div>
                      <div class="swiper-slide comment-swiper-slide"
                           style="width: 171.818px; margin-right: 10px;">
                        <div
                            style="height:240px;border-radius:5px;background-color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen"
                               class="svg-inline--fa fa-pen fa-w-16 fa-20 " role="img"
                               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                               style="width:20px">
                            <path fill="currentColor"
                                  d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path>
                          </svg>
                          <span
                              style="font-family:NanumSquare;font-size:12px;padding-top:8px;font-weight:bold">방명록 작성하기</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="display:flex;align-content:center;justify-content:space-between;padding:15px 20px 0">
                    <span
                        style="font-size:14px;font-weight:bold;font-family:NanumSquare;color:#444;display:flex;line-height:30px;cursor:pointer">전체 보기</span><span
                      style="font-size:14px;font-weight:bold;font-family:NanumSquare;color:#444;display:flex;line-height:30px;cursor:pointer">방명록 작성</span>
                  </div>
                </div>
              </div>
            </div>
            <div style="color:#333;margin-top:100px">
              <div data-aos="fade-up"
                   style="font-size:20px;display:flex;justify-content:center;align-items:center" class="aos-init">
                <img src="/flower-2.png" style="width:40px"></div>
              <p data-aos="fade-up" style="font-size:16px;font-weight:500;margin-top:10px" class="aos-init">마음 전하실
                곳</p>
              <div data-aos="fade-up" class="aos-init">
                <div style="display:flex;align-content:center;justify-content:center">
                  <div style="width:280px">
                    <div class="jss1">
                      <div
                          class="MuiPaper-root MuiAccordion-root MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded">
                        <div class="MuiButtonBase-root MuiAccordionSummary-root" tabindex="0"
                             role="button" aria-disabled="false" aria-expanded="false"
                             aria-controls="panel1a-content" id="panel1a-header"
                             style="background-color:#F0EDCC;border-radius:5px 5px 0px 0px;color:#333">
                          <div class="MuiAccordionSummary-content"><p
                              class="MuiTypography-root jss2 MuiTypography-body1">신랑측 계좌번호</p>
                          </div>
                          <div
                              class="MuiButtonBase-root MuiIconButton-root MuiAccordionSummary-expandIcon MuiIconButton-edgeEnd"
                              aria-disabled="false" aria-hidden="true"><span
                              class="MuiIconButton-label"><svg class="MuiSvgIcon-root"
                                                               focusable="false"
                                                               viewBox="0 0 24 24"
                                                               aria-hidden="true"><path
                              d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></span><span
                              class="MuiTouchRipple-root"></span></div>
                        </div>
                        <div class="MuiCollapse-container MuiCollapse-hidden"
                             style="min-height: 0px; height: 0px; transition-duration: 257ms;">
                          <div class="MuiCollapse-wrapper">
                            <div class="MuiCollapse-wrapperInner">
                              <div aria-labelledby="panel1a-header" id="panel1a-content"
                                   role="region">
                                <div class="MuiAccordionDetails-root"><p
                                    class="MuiTypography-root MuiTypography-body1">
                                  <div style="padding-bottom: 10px; border-bottom: none;"><h4
                                      style="padding-top: 10px; padding-bottom: 0px; text-align: left;">
                                    신랑측</h4>
                                    <div style="display: flex; text-align: left; padding-top: 8px;">
                                      <div style="width: 180px;"><p
                                          style="margin: 3px 0px 0px;">
                                        3333-01-4301036</p>
                                        <p style="margin: 4px 0px 0px;">카카오뱅크 / 김재욱</p>
                                      </div>
                                      <div style="width: 70px; height: 26px;">
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-contained"
                                                tabindex="0" type="button"
                                                style="width: 100%; height: 100%; padding: 0px; color: rgb(255, 255, 255); background-color: rgb(2, 52, 63);">
                                          <span class="MuiButton-label">복사하기</span><span
                                            class="MuiTouchRipple-root"></span>
                                        </button>
                                        <div
                                            style="display: inline-block; width: 70px; background-color: rgb(255, 223, 0); margin-top: 5px; border-radius: 5px;">
                                          <a href="https://qr.kakaopay.com/281006011000009010312990"
                                             style="display: flex; align-items: center; justify-content: center;"><img
                                              src="/kakaopay.png"
                                              style="height: 26px;"></a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="margin-top:15px">
                  <div style="display:flex;align-content:center;justify-content:center">
                    <div style="width:280px">
                      <div class="jss1">
                        <div
                            class="MuiPaper-root MuiAccordion-root MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded">
                          <div class="MuiButtonBase-root MuiAccordionSummary-root" tabindex="0"
                               role="button" aria-disabled="false" aria-expanded="false"
                               aria-controls="panel1a-content" id="panel1a-header"
                               style="background-color:#F0EDCC;border-radius:5px 5px 0px 0px;color:#333">
                            <div class="MuiAccordionSummary-content"><p
                                class="MuiTypography-root jss2 MuiTypography-body1">신부측 계좌번호</p>
                            </div>
                            <div
                                class="MuiButtonBase-root MuiIconButton-root MuiAccordionSummary-expandIcon MuiIconButton-edgeEnd"
                                aria-disabled="false" aria-hidden="true"><span
                                class="MuiIconButton-label"><svg class="MuiSvgIcon-root"
                                                                 focusable="false"
                                                                 viewBox="0 0 24 24"
                                                                 aria-hidden="true"><path
                                d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></span><span
                                class="MuiTouchRipple-root"></span></div>
                          </div>
                          <div class="MuiCollapse-container MuiCollapse-hidden"
                               style="min-height: 0px; height: 0px; transition-duration: 257ms;">
                            <div class="MuiCollapse-wrapper">
                              <div class="MuiCollapse-wrapperInner">
                                <div aria-labelledby="panel1a-header" id="panel1a-content"
                                     role="region">
                                  <div class="MuiAccordionDetails-root"><p
                                      class="MuiTypography-root MuiTypography-body1">
                                    <div style="padding-bottom: 10px; border-bottom: none;">
                                      <h4 style="padding-top: 10px; padding-bottom: 0px; text-align: left;">
                                        신부측</h4>
                                      <div style="display: flex; text-align: left; padding-top: 8px;">
                                        <div style="width: 180px;"><p
                                            style="margin: 3px 0px 0px;">
                                          110-387-639660</p>
                                          <p style="margin: 4px 0px 0px;">신한은행 /
                                            김은희</p></div>
                                        <div style="width: 70px; height: 26px;">
                                          <button class="MuiButtonBase-root MuiButton-root MuiButton-contained"
                                                  tabindex="0" type="button"
                                                  style="width: 100%; height: 100%; padding: 0px; color: rgb(255, 255, 255); background-color: rgb(2, 52, 63);">
                                            <span class="MuiButton-label">복사하기</span><span
                                              class="MuiTouchRipple-root"></span>
                                          </button>
                                          <div
                                              style="display: inline-block; width: 70px; background-color: rgb(255, 223, 0); margin-top: 5px; border-radius: 5px;">
                                            <a href="https://qr.kakaopay.com/281006011000009010312990"
                                               style="display: flex; align-items: center; justify-content: center;"><img
                                                src="/kakaopay.png"
                                                style="height: 26px;"></a></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div data-aos="fade-up"
                     style="display:flex;justify-content:center;padding-top:30px;font-size:16px;padding-right:20px;padding-left:20px;font-weight:500"
                     class="aos-init">
                  <div style="flex:1"><p>신랑<!-- --> <span style="font-weight:bold">김재욱</span></p>
                    <div style="display:flex;justify-content:center;align-items:center;font-size:18px;color:#333">
                      <a href="tel:01000000000"
                         style="padding:3px 8px;margin-right:10px;color:#333;width:34px">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas"
                             data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16 fa-14 "
                             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                        </svg>
                      </a><a href="sms:01000000000" style="padding:3px 8px;color:#333;width:34px">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                           class="svg-inline--fa fa-envelope fa-w-16 fa-14 " role="img"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                              d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                      </svg>
                    </a></div>
                    <div style="margin-top:15px;display:flex;justify-content:center;align-items:center"></div>
                  </div>
                  <div style="flex:1"><p>신부<!-- --> <span style="font-weight:bold">김은희</span></p>
                    <div style="display:flex;justify-content:center;align-items:center;font-size:18px;color:#333">
                      <a href="tel:01000000000"
                         style="padding:3px 8px;margin-right:10px;color:#333;width:34px">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas"
                             data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16 fa-14 "
                             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                        </svg>
                      </a><a href="sms:01000000000" style="padding:3px 8px;color:#333;width:34px">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                           class="svg-inline--fa fa-envelope fa-w-16 fa-14 " role="img"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                              d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                      </svg>
                    </a></div>
                    <div style="display:flex;align-items:center;justify-content:center;margin-top:15px"></div>
                  </div>
                </div>
              </div>
              <div>
                <div style="padding-top:100px;font-size:14px;font-weight:500"><p data-aos="fade-up"
                                                                                 class="aos-init">혼주에게 연락하기</p>
                  <div data-aos="fade-up" style="display:flex;padding:0 20px;padding-top:30px"
                       class="aos-init">
                    <div style="flex:1"><p style="margin:0"><span
                        style="border-bottom:1px solid #333;padding-bottom:10px">신랑측 혼주</span></p>
                      <div style="display:block">
                        <div style="padding-top:20px;flex:1;height:120px;margin-bottom:10px"><p
                            style="padding-top:5px">아버지<!-- --> <span
                            style="font-weight:bold">김민수</span></p>
                          <div style="display:flex;justify-content:center;align-items:center;font-size:18px;color:#333">
                            <a href="tel:01000000000"
                               style="padding:3px 8px;margin-right:10px;color:#333;width:34px">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                   data-icon="phone-alt"
                                   class="svg-inline--fa fa-phone-alt fa-w-16 fa-14 " role="img"
                                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                              </svg>
                            </a><a href="sms:01000000000"
                                   style="padding:3px 8px;color:#333;width:34px">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="envelope"
                                 class="svg-inline--fa fa-envelope fa-w-16 fa-14 " role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor"
                                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                            </svg>
                          </a></div>
                          <div style="margin-top:15px;display:flex;justify-content:center;align-items:center"></div>
                        </div>
                        <div style="padding-top:20px;flex:1"><p style="padding-top:5px">어머니<!-- -->
                          <span style="font-weight:bold">김예인</span></p>
                          <div style="display:flex;justify-content:center;align-items:center;font-size:18px;color:#333">
                            <a href="tel:01000000000"
                               style="padding:3px 8px;margin-right:10px;color:#333;width:34px">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                   data-icon="phone-alt"
                                   class="svg-inline--fa fa-phone-alt fa-w-16 fa-14 " role="img"
                                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                              </svg>
                            </a><a href="sms:01000000000"
                                   style="padding:3px 8px;color:#333;width:34px">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="envelope"
                                 class="svg-inline--fa fa-envelope fa-w-16 fa-14 " role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor"
                                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                            </svg>
                          </a></div>
                          <div style="margin-top:15px;display:flex;justify-content:center;align-items:center"></div>
                        </div>
                      </div>
                    </div>
                    <div style="flex:1"><p style="margin:0"><span
                        style="border-bottom:1px solid #333;padding-bottom:10px">신부측 혼주</span></p>
                      <div style="display:block">
                        <div style="padding-top:20px;flex:1;height:120px;margin-bottom:10px"><p
                            style="padding-top:5px">아버지<!-- --> <span
                            style="font-weight:bold">김민우</span></p>
                          <div style="display:flex;justify-content:center;align-items:center;font-size:18px;color:#333">
                            <a href="tel:01000000000"
                               style="padding:3px 8px;margin-right:10px;color:#333;width:34px">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                   data-icon="phone-alt"
                                   class="svg-inline--fa fa-phone-alt fa-w-16 fa-14 " role="img"
                                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                              </svg>
                            </a><a href="sms:01000000000"
                                   style="padding:3px 8px;color:#333;width:34px">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="envelope"
                                 class="svg-inline--fa fa-envelope fa-w-16 fa-14 " role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor"
                                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                            </svg>
                          </a></div>
                          <div style="margin-top:15px;display:flex;justify-content:center;align-items:center"></div>
                        </div>
                        <div style="padding-top:20px;flex:1"><p style="padding-top:5px">어머니<!-- -->
                          <span style="font-weight:bold">황선영</span></p>
                          <div style="display:flex;justify-content:center;align-items:center;font-size:18px;color:#333">
                            <a href="tel:01000000000"
                               style="padding:3px 8px;margin-right:10px;color:#333;width:34px">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                   data-icon="phone-alt"
                                   class="svg-inline--fa fa-phone-alt fa-w-16 fa-14 " role="img"
                                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                              </svg>
                            </a><a href="sms:01000000000"
                                   style="padding:3px 8px;color:#333;width:34px">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="envelope"
                                 class="svg-inline--fa fa-envelope fa-w-16 fa-14 " role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor"
                                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                            </svg>
                          </a></div>
                          <div style="margin-top:15px;display:flex;justify-content:center;align-items:center"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="height:70px;width:100%;background-color:#fefefe;position:absolute;bottom:0">
            <div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center"><a
                href="https://smartstore.naver.com/cryu"><img src="/banner.png" style="height:30px"></a><a
                href="https://smartstore.naver.com/cryu" style="text-decoration:none"><p
                style="margin:0;font-size:8px;color:#777">Copyright © 2021 Cryucard.</p></a></div>
            <div>
              <div
                  style="position:absolute;right:10px;top:15px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;cursor:pointer">
                <div
                    style="border:1px solid #333;width:25px;height:25px;border-radius:15px;color:#333;display:flex;align-items:center;justify-content:center;font-size:14px;padding-right:2px">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share-alt"
                       class="svg-inline--fa fa-share-alt fa-w-14 fa-10 " role="img"
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                       style="width:16px;height:16px">
                    <path fill="currentColor"
                          d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path>
                  </svg>
                </div>
                <span style="font-size:8px;color:#333;padding-top:5px">공유하기</span></div>
            </div>
          </div>
          <div style="opacity:0;transition:opacity 1s">
            <div style="display:flex;position:fixed;bottom:80px;right:10px;align-items:center">
              <div style="display:flex;align-items:center;margin-right:3px">
                <div style="padding:5px 8px;border-radius:5px;background-color:rgba(0,0,0,0.6);display:flex">
                  <span style="font-size:11px;color:#fff">무료로 시안을 제작해보세요 !</span></div>
                <div
                    style="width:0;height:0;border-top:6px solid transparent;border-left:12px solid #000;border-bottom:6px solid transparent;opacity:0.6"></div>
              </div>
              <button class="MuiButtonBase-root MuiFab-root MuiFab-secondary" tabindex="0" type="button"
                      aria-label="add"><span class="MuiFab-label"><svg class="MuiSvgIcon-root" focusable="false"
                                                                       viewBox="0 0 24 24" aria-hidden="true"><path
                  d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"></path></svg></span><span
                  class="MuiTouchRipple-root"></span></button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "Introimage",
};
</script>

<style scoped>


@import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap");
.swiper-comment .swiper-slide {
  box-shadow: 1px 1px 3px rgb(0 0 0/7%);
  margin-bottom: 10px;
  border-radius: 5px
}

@import url("https://fonts.googleapis.com/earlyaccess/nanummyeongjo.css");
@import url("https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css");
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap");
@font-face {
  font-family: SunBatang-Light;
  src: url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/SunBatang-Light.woff) format("woff");
  font-weight: 400;
  font-style: normal
}

@font-face {
  font-family: RIDIBatang;
  src: url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff) format("woff");
  font-weight: 400;
  font-style: normal
}


</style>
