import { Workbox } from 'workbox-window';


export const wb = new Workbox("./sw.js")

export default async function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        console.log("Sw available")
        wb.addEventListener('installed', event => {
            if (event.isUpdate) {
              if (window.confirm(`New app update is available! Click OK to refresh`)) {
                window.location.reload();
              }
            }
          });
        wb.register().then(res => {
          let subhead = document.createElement("h3")
          subhead.innerHTML = "Service Worker active"
          document.body.appendChild(subhead)
          
          let para = document.createElement("p")
          para.innerHTML = "Response: " + res
          document.body.appendChild(para)
        }).catch(err => {
          let subhead = document.createElement("h3")
          subhead.innerHTML = "Service Worker inactive"
          document.body.appendChild(subhead)

          let para = document.createElement("p")
          para.innerHTML = "Error: " + err
          document.body.appendChild(para)
        })
    } else {
        console.error("Service Worker not supported!")
    }

}
