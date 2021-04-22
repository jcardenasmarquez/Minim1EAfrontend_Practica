import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cluster } from '../models/cluster';

@Injectable({
  providedIn: 'root',
})
export class ClusterService {
  serverIP: string = 'localhost';
  serverPort: number = 25000;

  clusterRouter: string = `http://${this.serverIP}:${this.serverPort}/api/clusters`;

  constructor(private http: HttpClient) {}

  getClusters() {
    const path = `${this.clusterRouter}/`;
    return this.http.get<Cluster[]>(path);
  }

  getCluster(clusterid: string) {
    const path = `${this.clusterRouter}/${clusterid}`;
    return this.http.get<Cluster>(path);
  }

  addCluster(newcluster: Cluster) {
    const path = `${this.clusterRouter}/new`;
    return this.http.post(path, newcluster);
  }

  editCluster(clusterid: string, clustertomodify: Cluster) {
    const path = `${this.clusterRouter}/${clusterid}`;
    return this.http.put(path, clustertomodify);
  }
}
