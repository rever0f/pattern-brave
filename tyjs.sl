doctype 5
html
  head
    title Typing Tutor Input
    script type='text/javascript' src='./type.js'
    link type = "text/css" rel = "stylesheet" href = "./type.css"
    link type = "text/css" rel = "stylesheet" href = "./sideb.css"
  body
    #ftest
      #nwftest
        &submit onclick="nwtest()" value="New Test"
      #stmarq
        &submit onclick="sttest()" value="Start" id="stbtest"
        span id="txtmarq"
      &text#tstentry onkeypress="nextchar()"
      #tstdata
        span#wpm
        span.right for="cnt"
          Times Taken:
          | &nbsp;&nbsp;
          span#cnt
        #accu
        #mis
      &hidden#sttime
    #dtext
      &text#tsttext
      &submit#crtest value="Create Test" onclick="mktest()"

    script type='text/javascript'
      | root();
