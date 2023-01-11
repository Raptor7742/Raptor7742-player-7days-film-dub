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
            "https://m108.syncusercontent.com/mfs-60:75db806aedab94373e90584ab35f368e=============================/p/7%20jours%20dub.mp4?allowdd=0&datakey=p4+JVLJENoODiBOfs0DRSZBHVI9BPub8hHkGQNRsWKbskpPS8R6jNPRjVIOs/Vjyob+zAZET/aZDvHULerQfsSEot5qI/flPZQpVpNOp9xObGA2CwaxN8YpG5pFSfZdWWbSROeU2mbkfKfartLr8OxPj1nPEAjzw27Hdd8+FJBDgHRVJEXbOBW9XJT/GO0Xpv8Sa2XmJer9V4NyeBiibCs38GcXjXegAF+HEOzJ4hOXGWewDyX139A/C2EH/nXPWTXhGBMwBpkqHwUZoD7bevmfWGcR+M1OwpGT4CS1UXwJl92XRL6ug9OZF3uwdZYTrVL6WdMSD1RjbZTkufEbLug&engine=ln-2.3.8&errurl=AUDqLR9CiBay/y74G+hkoGB/xKxuimufRuyvKBTPWAxGb8rvi33rvPQQWrwiB3gyrU89VwYVK2sxysmIU8Ebn726qdBo0ZgdsqL6yoTLWAmrRRt8L6CbIwtGvJBhTahtJjIGH6qHMLD7yqyo1834vG1G3/v5RbuxGj9ktEeJHlyvyDFLraeDn/rvhZe/WoJ87Zus5bg6ZPZ4YNB072qGh6pvi8rJbr5GYMzWVl7qr1K2dROoXhTw5Ek02A+T0m6+8Z3m57GJcx1lu9QJUUU/PBzHhGx95IJDJ+7uYgaCJKVvJ17NRRBGI3KXIAJexoSP8m6TM/TE0bksEIlYK9eawg==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogYXR0YWNobWVudDsgZmlsZW5hbWU9IjclMjBqb3VycyUyMGR1Yi5tcDQiO2ZpbGVuYW1lKj1VVEYtOCcnNyUyMGpvdXJzJTIwZHViLm1wNDs&ipaddress=1458994159&linkcachekey=c8f045600&linkoid=1983610011&mode=101&sharelink_id=9632517860011&timestamp=1673433962634&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=2f7b677cbf0cbf69e768c601cff95acf20d6ee6a&cachekey=60:75db806aedab94373e90584ab35f368e=============================",
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
          ""
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
