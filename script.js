const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "7 jours - Bokura no nanokakan sensou - VF",
      description: "Vous regardez",
      image: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/animes/animes%20wallpapers/7-jourscarousel.jpg",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m108.syncusercontent.com/mfs-60:75db806aedab94373e90584ab35f368e=============================/p/7%20jours%20dub.mp4?allowdd=0&datakey=IIpoMC71UAOh+wdxwYCiWZTQolvmG6ZXxi/VEEr63dNYND5Xigni/JzLvSnMkZE3zqY46dCahkzu61esaXM7Z1pq9gfARG5phHKOt7GZGkKK2dZDuZN2ZOBqYiNwZBrv3JSUFbGF4i9buUIkgjSN2UkYii4bW+/aQladREKLNIwe04d6sZ9NW0AYPvPHfxyDV9G2p98g+zA6xFpClLPyax1PjJ3Y9BLSWll24HrTH3CW+gkZbLc6xqEgwzT0Mf+97tt/6fC4vm30ksBGAyrrc3vbMpuX5RCVK7jsPBp1i8osrFN+kkFbmt+9V0AM3Z4yKNnW7rRG1YB8z+XtMXd8tQ&engine=ln-2.3.7.3&errurl=Z/a4+mTsCplQJdY91k6Qd9VDAd2eVDulXi6dJcfnre9eI2tBcTI8/scCxriWC7SMBuKqA4CufW5qq4mMgoEybxsxQUug5KpMcUdO8Pv+K9gnHTA0iFufTWTv6akeZrPHoKprx+z8SuM6mi3TKpNVqmwHayDFRPylfbz3xLYQS+2U0rVNIWvigC8Ou1Wu8EkZFidJ3kG66cKDL9Ko847+DzR9fQAkqfyk58o8di/O4ee3eiPDKXBYFMaIHTZBIaUP7qYfn1dazBWB2AQz1mAgxcS0w/xSqssY3pOAjO3a5mxcpkUYQU5KEi7oi4N78JRiiYvWVC51wOGZ/Kro9MVXow==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iNyUyMGpvdXJzJTIwZHViLm1wNCI7ZmlsZW5hbWUqPVVURi04Jyc3JTIwam91cnMlMjBkdWIubXA0Ow&ipaddress=1458994159&linkcachekey=c8f045600&linkoid=1983610011&mode=101&sharelink_id=9632517860011&timestamp=1672690034376&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=8b16325d406306daaa6591f620d8dd05fe4514c8&cachekey=60:75db806aedab94373e90584ab35f368e=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
