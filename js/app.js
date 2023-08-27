"use strict";
const alertNotficatioContainer = document.getElementById('alert-notify');
const announceNotficatioContainer = document.getElementById('announcement-notify');
const announcements = [
    {
        read: true,
        PA: "Wilson Kumar",
        icon: "checked",
        notificationMsg: "No classes will be held on 21st Nov",
        course: "",
        attachments: "2 files are attached",
        date: "15-Sep-2018",
        time: "07:21pm"
    },
    {
        read: false,
        PA: "Samson White",
        icon: "remove",
        notificationMsg: "Guest lecture on Geometry on 20th September",
        course: "",
        attachments: "2 files are attached",
        date: "15-Sep-2018",
        time: "07:21pm"
    },
    {
        read: true,
        PA: "Wilson Kumar",
        icon: "checked",
        notificationMsg: "Additional course materials available on request",
        course: "Mathematics 101",
        attachments: "",
        date: "15-Sep-2018",
        time: "07:21pm"
    },
    {
        read: false,
        PA: "Wilson Kumar",
        icon: "remove",
        notificationMsg: "No classes will be held on 25th Dec",
        course: "",
        attachments: "",
        date: "15-Sep-2018",
        time: "07:21pm"
    },
    {
        read: false,
        PA: "Wilson Kumar",
        icon: "remove",
        notificationMsg: "Additional course materials available on request",
        course: "Mathematics 101",
        attachments: "",
        date: "15-Sep-2018",
        time: "07:21pm"
    },
    {
        read: false,
        PA: "Samson White",
        icon: "remove",
        notificationMsg: "Guest lecture on Geometry on 20th September",
        course: "",
        attachments: "2 files are attached",
        date: "15-Sep-2018",
        time: "07:21pm"
    },
    {
        read: false,
        PA: "Samson White",
        icon: "remove",
        notificationMsg: "Guest lecture on Geometry on 20th September",
        course: "",
        attachments: "2 files are attached",
        date: "15-Sep-2018",
        time: "07:21pm"
    }
];
for (let i = 0; i < announcements.length; i++) {
    const card = document.createElement('div');
    let msg = announcements[i].notificationMsg;
    let date = announcements[i].date;
    let time = announcements[i].time;
    let course = announcements[i].course;
    let status = announcements[i].read;
    let pa = announcements[i].PA;
    let attachments = announcements[i].attachments;
    `${status
        ? card.classList.add('announce-card')
        : card.classList.add('announce-card', 'openn')}`;
    card.innerHTML = `<span class="instructor">PA:<b> ${pa}</b></span>
                      
     <p class="alert"> ${msg}</p>
     ${status
        ? ` <img class="check" src="../icons/icons/check_circle.svg" alt="">`
        : `                    <img class="dnd" src="../icons/icons/dnd.svg" alt="">
         `}
     ${course ? ` <span class="files">Course: <b>${course}</b></span>` : ""}
     ${attachments ? ` <span class="files"> <img class="paperclip" src="../icons/icons/attach_file.svg" alt="">
                    ${attachments}</span>` : ""}
 
                          <span class=date>${date} at ${time} </span>
                          
                  <div class="c-divider">
                
     `;
    announceNotficatioContainer.appendChild(card);
}
const alerts = [
    {
        "id": "read",
        "alertMsg": "License for Introduction to Algebra has been assigned toyour school",
        "status": "remove",
        "course": null,
        "date": "15-Sep-2018",
        "time": "07:21pm"
    },
    {
        "id": "read",
        "alertMsg": "Lesson 3 Practice Worksheet overdue for Amy Santiago",
        "status": "checked",
        "course": "Advance Mathematics",
        "date": "15-Sep-2018",
        "time": "07:21pm"
    },
    {
        "id": "unread",
        "alertMsg": "23 new students created",
        "status": "remove",
        "course": null,
        "date": "14-Sep-2018",
        "time": "01:21pm"
    },
    {
        "id": "unread",
        "alertMsg": "15 submissions ready for eveluation",
        "status": "remove",
        "course": "Basics of Algebra",
        "date": "13-Sep-2018",
        "time": "01:15pm"
    },
    {
        "id": "unread",
        "alertMsg": "License for Basic Concepts in Geometry has been assigned to your school",
        "status": "remove",
        "course": null,
        "date": "15-Sep-2018",
        "time": "07:21pm"
    },
    {
        "id": "read",
        "alertMsg": "Lesson 3 Practice Worksheet overdue for Sam Diego",
        "status": "checked",
        "course": "Advance Mathematics",
        "date": "15-Sep-2018",
        "time": "07:21pm"
    },
    {
        "id": "read",
        "alertMsg": "Lesson 3 Practice Worksheet overdue for Amy Santiago",
        "status": "checked",
        "course": "Advance Mathematics",
        "date": "15-Sep-2018",
        "time": "07:21pm"
    }
];
for (let i = 0; i < alerts.length; i++) {
    const card = document.createElement('div');
    let msg = alerts[i].alertMsg;
    let date = alerts[i].date;
    let time = alerts[i].time;
    let course = alerts[i].course;
    let status = alerts[i].status;
    `${status === "checked"
        ? card.classList.add('noti-card')
        : card.classList.add('open', 'noti-card')}`;
    card.innerHTML = `<p class="alert"> ${msg}</p>
    ${status === "checked"
        ? ` <img class="check" src="../icons/icons/check_circle.svg" alt="">`
        : `                    <img class="dnd" src="../icons/icons/dnd.svg" alt="">
        `}
    ${course ? ` <span class="alert-course">Course: <b>${course}</b></span>` : ""}

                         <span class=date>${date} at ${time} </span>
                         
                 <div class="c-divider">
               
    `;
    alertNotficatioContainer.appendChild(card);
}
// function  alertToggle(){
//   let at = document.getElementById('alert-notify');
//   let n=document.getElementsByClassName('notify');
//   if(at.style.display != 'none'){
//   at.style.display = 'none';
//   }
//   else{
//   at.style.display = 'block';
//   }
//   if(n.style.display != 'none'){
//     n.style.display = 'none';
//     }
//     else{
//     n.style.display = 'block';
//     }
// }
// function announcementToggle(){
//   let an = document.getElementById('announcement-notify');
//   let n=document.getElementsByClassName('notify1');
//   if(an.style.display != 'none'){
//   an.style.display = 'none';
//   }
//   else{
//   an.style.display = 'block';
//   }
//   if(n.style.display != 'none'){
//   n.style.display = 'none';
//   }
//   else{
//   n.style.display = 'block';
//   }
// }
// window.onload = () => {
// announcementTemplate();
// alertTemplate();
// };
