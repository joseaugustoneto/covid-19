import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import * as br_states from "./br-states.json";

declare const L;

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.less"],
})
export class MapaComponent implements OnInit {
  @Output() selecionaEstado: EventEmitter<any> = new EventEmitter();

  public casos = {
    GO: { casos: 3906, obitos: 127 },
    DF: { casos: 10510, obitos: 171 },
    MT: { casos: 2541, obitos: 66 },
    MS: { casos: 1568, obitos: 20 },

    SC: { casos: 9498, obitos: 146 },
    RS: { casos: 9332, obitos: 232 },
    PR: { casos: 4835, obitos: 190 },

    AC: { casos: 6326, obitos: 161 },
    RR: { casos: 3692, obitos: 116 },
    PA: { casos: 38046, obitos: 2925 },
    TO: { casos: 4345, obitos: 76 },
    AM: { casos: 41774, obitos: 2071 },
    RO: { casos: 5172, obitos: 159 },
    AP: { casos: 989, obitos: 228 },

    BA: { casos: 18898, obitos: 701 },
    PB: { casos: 13695, obitos: 370 },
    AL: { casos: 10837, obitos: 461 },
    CE: { casos: 50504, obitos: 3188 },
    SE: { casos: 7233, obitos: 166 },
    PI: { casos: 5119, obitos: 168 },
    RN: { casos: 7964, obitos: 323 },
    MA: { casos: 35297, obitos: 976 },
    PE: { casos: 34900, obitos: 2875 },

    SP: { casos: 111296, obitos: 7667 },
    ES: { casos: 14069, obitos: 614 },
    RJ: { casos: 54530, obitos: 5462 },
    MG: { casos: 10670, obitos: 278 },
  };

  constructor() {}


  ngOnInit() {
    var mymap = L.map("mapid").setView([-15.855103, -49.004627], 4);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      {
        maxZoom: 20,
        mimZoom: 4,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(mymap);

    br_states.features.forEach((f) => {
      const self = this;
      const polygon = L.geoJSON(
        { type: "FeatureCollection", features: [f] },
        { color: "green", id: f.properties }
      ).addTo(mymap);

      polygon.on("click", onMapClick);

      function onMapClick(e) {
        console.log(f.properties);

        const estado = self.casos[f.properties.sigla];
        const nome = f.properties.name;

        self.selecionaEstado.emit({ estado, nome });
        popup
          .setLatLng(e.latlng)
          .setContent(
            `${nome} - ${estado.casos} cases | ${estado.obitos} deaths`
          )
          .openOn(mymap);
      }
    });

    var popup = L.popup();
  }
}
