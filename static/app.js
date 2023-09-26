function drawText(text) {
  const div = document.createElement("div");
  div.innerHTML = text;
  document.getElementById("log").appendChild(div);
}

const centrifuge = new Centrifuge(
  "ws://niceday.space/connection/connection/websocket",
  {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMSIsImV4cCI6MTY5NjMyMjAwOH0.aWTcGfiyDfmRTkRwRgiTqxwSnRZg3A2PI6VvxAWv_GA",
  }
);

centrifuge.on("connect", function () {
  drawText("Connected to Centrifugo");
});

centrifuge.on("disconnect", function () {
  drawText("Disconnected from Centrifugo");
});

centrifuge.on("publish", function (ctx) {
  drawText("Publication, time = " + ctx.data.time);
});

centrifuge.connect();
