const announcementTemplate = () => {
    fetch("./announcements.json")
      .then((res) => res.json())
      .then((announcementNotification) => {
        let notificationcard = document.getElementById("announcement-notify");
        console.log(announcementNotification);
  
        const notificationTemplate = announcementNotification.map((an, key) => {
          return `
          ${
            an.msgStatus === "unread"
              ? '<div  class="announce-card">'
              : '<div class="openn">'
          }
           <span class="instructor"> PA:<b>${an.PA} </></span>
          <p class="alert"> ${an.notificationMsg}</p>

              ${
                an.status === "checked"
                  ?    ` <img class="check" src="icons/icons/check_circle.svg" alt="">`
                  : `                    <img class="dnd" src="icons/icons/dnd.svg" alt="">
                  `
              }
              ${an.course ? `<span class="files">Course: ${an.course}</span>` : " "}
                ${
                  an.attachments
                    ? `<span class="files"> <img class="paperclip" src="icons/icons/attach_file.svg" alt="">
                    2 files are attached</span>`
              
                    : " "
                }
                <span class="date"> ${an.date} at ${an.time} </span>
                                  
            
            </div>
           

          </div>
            <div class="c-divider"></div>
          `;
        });
        notificationTemplate.map((template) => {
          return (notificationcard.innerHTML += template);
        });
      })
      .catch((err) => {
        console.log("JSON Error:", err);
      });
  };
  
  const alertTemplate = () => {
    fetch("./alerts.json")
      .then((res) => res.json())
      .then((alertNotification) => {
        let alertCard = document.getElementById("alert-notify");
        console.log(alertNotification);
  
        const alertTemplate = alertNotification.map((at, key) => {
          return `
          ${
            at.id === "unread"
              ? '<div  class="noti-card">'
              : '<div class="open">'
          }
                      <div class="alt-msg">
                        ${at.alertMsg}
                      </div>
                      ${
                        at.status === "checked"
                          ?    ` <img class="check" src="icons/icons/check_circle.svg" alt="">`
                          : `                    <img class="dnd" src="icons/icons/dnd.svg" alt="">
                          `
                      }
                    
                      ${at.course ? `<span class="files">Course: ${at.course}</span>` : " "}
                      ${
                        at.attachments
                          ? `<span class="files"> <img class="paperclip" src="icons/icons/attach_file.svg" alt="">
                          2 files are attached</span>`
                    
                          : " "
                      }
                      <span class="date"> ${at.date} at ${at.time} </span>
                      
                      </div>
                      <div class="c-divider"></div>
          `;
        });
        alertTemplate.map((template) => {
          return (alertCard.innerHTML += template);
        });
      })
      .catch((err) => {
        console.log("JSON Error:", err);
      });
  };

  
  
function alertToggle(){
        let at = document.getElementById('alert-notify');
        let n=document.getElementsByClassName('notify');

        if(at.style.display != 'none'){
        at.style.display = 'none';
        }
        else{
        at.style.display = 'block';
        }
        if(n.style.display != 'none'){
          n.style.display = 'none';
          }
          else{
          n.style.display = 'block';
          }
    }
function announcementToggle(){
        let an = document.getElementById('announcement-notify');
        let n=document.getElementsByClassName('notify1');
        if(an.style.display != 'none'){
        an.style.display = 'none';
        }
        else{
        an.style.display = 'block';
        }
        if(n.style.display != 'none'){
        n.style.display = 'none';
        }
        else{
        n.style.display = 'block';
        }
    }
  window.onload = () => {
    announcementTemplate();
    alertTemplate();
  };