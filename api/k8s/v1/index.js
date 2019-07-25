module.exports = (function() {
  const $protobuf = require('protobufjs');
  const grpc = require('grpc');
  const registar = require('../../../lib/registar.js');
  const util = require('../../../lib/util.js');
  const $Reader = $protobuf.Reader;
  const $Writer = $protobuf.Writer;
  const $util = $protobuf.util;
  let root = {};
  require('../../../api/operation');
  (function($root) {
    $root.Cluster = (function() {
      function Cluster(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Cluster.prototype.id = '';
      Cluster.prototype.folderId = '';
      Cluster.prototype.createdAt = null;
      Cluster.prototype.name = '';
      Cluster.prototype.description = '';
      Cluster.prototype.labels = $util.emptyObject;
      Cluster.prototype.status = 0;
      Cluster.prototype.health = 0;
      Cluster.prototype.networkId = '';
      Cluster.prototype.master = null;
      Cluster.prototype.ipAllocationPolicy = null;
      Cluster.prototype.gatewayIpv4Address = '';
      Cluster.prototype.serviceAccountId = '';
      Cluster.prototype.nodeServiceAccountId = '';
      let $oneOfFields;
      Object.defineProperty(Cluster.prototype, 'internetGateway', {
        get: $util.oneOfGetter(($oneOfFields = ['gatewayIpv4Address'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      Cluster.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(18).string(m.folderId);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(26).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(34).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(42).string(m.description);
        if (m.labels != null && m.hasOwnProperty('labels')) {
          for (let ks = Object.keys(m.labels), i = 0; i < ks.length; ++i) {
            w.uint32(50)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.labels[ks[i]])
              .ldelim();
          }
        }
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(56).int32(m.status);
        if (m.health != null && m.hasOwnProperty('health')) w.uint32(64).int32(m.health);
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(74).string(m.networkId);
        if (m.master != null && m.hasOwnProperty('master')) $root.api.k8s.v1.Master.encode(m.master, w.uint32(82).fork()).ldelim();
        if (m.ipAllocationPolicy != null && m.hasOwnProperty('ipAllocationPolicy')) $root.api.k8s.v1.IPAllocationPolicy.encode(m.ipAllocationPolicy, w.uint32(90).fork()).ldelim();
        if (m.gatewayIpv4Address != null && m.hasOwnProperty('gatewayIpv4Address')) w.uint32(98).string(m.gatewayIpv4Address);
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(106).string(m.serviceAccountId);
        if (m.nodeServiceAccountId != null && m.hasOwnProperty('nodeServiceAccountId')) w.uint32(114).string(m.nodeServiceAccountId);
        return w;
      };
      Cluster.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.Cluster(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.folderId = r.string();
              break;
            case 3:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            case 4:
              m.name = r.string();
              break;
            case 5:
              m.description = r.string();
              break;
            case 6:
              r.skip().pos++;
              if (m.labels === $util.emptyObject) m.labels = {};
              k = r.string();
              r.pos++;
              m.labels[k] = r.string();
              break;
            case 7:
              m.status = r.int32();
              break;
            case 8:
              m.health = r.int32();
              break;
            case 9:
              m.networkId = r.string();
              break;
            case 10:
              m.master = $root.api.k8s.v1.Master.decode(r, r.uint32());
              break;
            case 11:
              m.ipAllocationPolicy = $root.api.k8s.v1.IPAllocationPolicy.decode(r, r.uint32());
              break;
            case 12:
              m.gatewayIpv4Address = r.string();
              break;
            case 13:
              m.serviceAccountId = r.string();
              break;
            case 14:
              m.nodeServiceAccountId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Status = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'STATUS_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'PROVISIONING')] = 1;
        values[(valuesById[2] = 'RUNNING')] = 2;
        values[(valuesById[3] = 'RECONCILING')] = 3;
        values[(valuesById[4] = 'STOPPING')] = 4;
        values[(valuesById[5] = 'STOPPED')] = 5;
        values[(valuesById[6] = 'DELETING')] = 6;
        return values;
      })();
      Cluster.Status = Status;
      let Health = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'HEALTH_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'HEALTHY')] = 1;
        values[(valuesById[2] = 'UNHEALTHY')] = 2;
        return values;
      })();
      Cluster.Health = Health;
      return Cluster;
    })();
  })(root);
  (function($root) {
    $root.Master = (function() {
      function Master(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      Master.prototype.zonalMaster = null;
      Master.prototype.version = '';
      Master.prototype.endpoints = null;
      Master.prototype.masterAuth = null;
      let $oneOfFields;
      Object.defineProperty(Master.prototype, 'masterType', {
        get: $util.oneOfGetter(($oneOfFields = ['zonalMaster'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      Master.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zonalMaster != null && m.hasOwnProperty('zonalMaster')) $root.api.k8s.v1.ZonalMaster.encode(m.zonalMaster, w.uint32(10).fork()).ldelim();
        if (m.version != null && m.hasOwnProperty('version')) w.uint32(18).string(m.version);
        if (m.endpoints != null && m.hasOwnProperty('endpoints')) $root.api.k8s.v1.MasterEndpoints.encode(m.endpoints, w.uint32(26).fork()).ldelim();
        if (m.masterAuth != null && m.hasOwnProperty('masterAuth')) $root.api.k8s.v1.MasterAuth.encode(m.masterAuth, w.uint32(34).fork()).ldelim();
        return w;
      };
      Master.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.Master();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.zonalMaster = $root.api.k8s.v1.ZonalMaster.decode(r, r.uint32());
              break;
            case 2:
              m.version = r.string();
              break;
            case 3:
              m.endpoints = $root.api.k8s.v1.MasterEndpoints.decode(r, r.uint32());
              break;
            case 4:
              m.masterAuth = $root.api.k8s.v1.MasterAuth.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return Master;
    })();
  })(root);
  (function($root) {
    $root.MasterAuth = (function() {
      function MasterAuth(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MasterAuth.prototype.clusterCaCertificate = '';
      MasterAuth.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterCaCertificate != null && m.hasOwnProperty('clusterCaCertificate')) w.uint32(10).string(m.clusterCaCertificate);
        return w;
      };
      MasterAuth.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.MasterAuth();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterCaCertificate = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MasterAuth;
    })();
  })(root);
  (function($root) {
    $root.ZonalMaster = (function() {
      function ZonalMaster(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ZonalMaster.prototype.zoneId = '';
      ZonalMaster.prototype.internalV4Address = '';
      ZonalMaster.prototype.externalV4Address = '';
      ZonalMaster.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(10).string(m.zoneId);
        if (m.internalV4Address != null && m.hasOwnProperty('internalV4Address')) w.uint32(18).string(m.internalV4Address);
        if (m.externalV4Address != null && m.hasOwnProperty('externalV4Address')) w.uint32(26).string(m.externalV4Address);
        return w;
      };
      ZonalMaster.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ZonalMaster();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.zoneId = r.string();
              break;
            case 2:
              m.internalV4Address = r.string();
              break;
            case 3:
              m.externalV4Address = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ZonalMaster;
    })();
  })(root);
  (function($root) {
    $root.MasterEndpoints = (function() {
      function MasterEndpoints(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MasterEndpoints.prototype.internalV4Endpoint = '';
      MasterEndpoints.prototype.externalV4Endpoint = '';
      MasterEndpoints.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.internalV4Endpoint != null && m.hasOwnProperty('internalV4Endpoint')) w.uint32(10).string(m.internalV4Endpoint);
        if (m.externalV4Endpoint != null && m.hasOwnProperty('externalV4Endpoint')) w.uint32(18).string(m.externalV4Endpoint);
        return w;
      };
      MasterEndpoints.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.MasterEndpoints();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.internalV4Endpoint = r.string();
              break;
            case 2:
              m.externalV4Endpoint = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MasterEndpoints;
    })();
  })(root);
  (function($root) {
    $root.IPAllocationPolicy = (function() {
      function IPAllocationPolicy(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      IPAllocationPolicy.prototype.clusterIpv4CidrBlock = '';
      IPAllocationPolicy.prototype.serviceIpv4CidrBlock = '';
      IPAllocationPolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterIpv4CidrBlock != null && m.hasOwnProperty('clusterIpv4CidrBlock')) w.uint32(10).string(m.clusterIpv4CidrBlock);
        if (m.serviceIpv4CidrBlock != null && m.hasOwnProperty('serviceIpv4CidrBlock')) w.uint32(18).string(m.serviceIpv4CidrBlock);
        return w;
      };
      IPAllocationPolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.IPAllocationPolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterIpv4CidrBlock = r.string();
              break;
            case 2:
              m.serviceIpv4CidrBlock = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return IPAllocationPolicy;
    })();
  })(root);
  (function($root) {
    $root.ClusterService = function() {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.k8s.v1.ClusterService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.GetClusterRequest,
          responseType: $root.api.k8s.v1.Cluster,
          requestSerialize: r => {
            return $root.api.k8s.v1.GetClusterRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.GetClusterRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.Cluster.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.Cluster.decode
        },
        list: {
          path: '/yandex.cloud.k8s.v1.ClusterService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.ListClustersRequest,
          responseType: $root.api.k8s.v1.ListClustersResponse,
          requestSerialize: r => {
            return $root.api.k8s.v1.ListClustersRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.ListClustersRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.ListClustersResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.ListClustersResponse.decode
        },
        create: {
          path: '/yandex.cloud.k8s.v1.ClusterService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.CreateClusterRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.CreateClusterRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.CreateClusterRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.k8s.v1.ClusterService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.UpdateClusterRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.UpdateClusterRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.UpdateClusterRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.k8s.v1.ClusterService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.DeleteClusterRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.DeleteClusterRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.DeleteClusterRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listNodeGroups: {
          path: '/yandex.cloud.k8s.v1.ClusterService/ListNodeGroups',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.ListClusterNodeGroupsRequest,
          responseType: $root.api.k8s.v1.ListClusterNodeGroupsResponse,
          requestSerialize: r => {
            return $root.api.k8s.v1.ListClusterNodeGroupsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.ListClusterNodeGroupsRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.ListClusterNodeGroupsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.ListClusterNodeGroupsResponse.decode
        },
        listOperations: {
          path: '/yandex.cloud.k8s.v1.ClusterService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.ListClusterOperationsRequest,
          responseType: $root.api.k8s.v1.ListClusterOperationsResponse,
          requestSerialize: r => {
            return $root.api.k8s.v1.ListClusterOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.ListClusterOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.ListClusterOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.ListClusterOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'managed-kubernetes';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetClusterRequest = (function() {
      function GetClusterRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetClusterRequest.prototype.clusterId = '';
      GetClusterRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      GetClusterRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.GetClusterRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetClusterRequest;
    })();
  })(root);
  (function($root) {
    $root.ListClustersRequest = (function() {
      function ListClustersRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClustersRequest.prototype.folderId = '';
      ListClustersRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListClustersRequest.prototype.pageToken = '';
      ListClustersRequest.prototype.filter = '';
      ListClustersRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListClustersRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClustersRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            case 2:
              m.pageSize = r.int64();
              break;
            case 3:
              m.pageToken = r.string();
              break;
            case 4:
              m.filter = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListClustersRequest;
    })();
  })(root);
  (function($root) {
    $root.ListClustersResponse = (function() {
      function ListClustersResponse(p) {
        this.clusters = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClustersResponse.prototype.clusters = $util.emptyArray;
      ListClustersResponse.prototype.nextPageToken = '';
      ListClustersResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusters != null && m.clusters.length) {
          for (let i = 0; i < m.clusters.length; ++i) $root.api.k8s.v1.Cluster.encode(m.clusters[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListClustersResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClustersResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.clusters && m.clusters.length)) m.clusters = [];
              m.clusters.push($root.api.k8s.v1.Cluster.decode(r, r.uint32()));
              break;
            case 2:
              m.nextPageToken = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListClustersResponse;
    })();
  })(root);
  (function($root) {
    $root.DeleteClusterRequest = (function() {
      function DeleteClusterRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteClusterRequest.prototype.clusterId = '';
      DeleteClusterRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      DeleteClusterRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.DeleteClusterRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteClusterRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteClusterMetadata = (function() {
      function DeleteClusterMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteClusterMetadata.prototype.clusterId = '';
      DeleteClusterMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      DeleteClusterMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.DeleteClusterMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteClusterMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateClusterRequest = (function() {
      function UpdateClusterRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateClusterRequest.prototype.clusterId = '';
      UpdateClusterRequest.prototype.updateMask = null;
      UpdateClusterRequest.prototype.name = '';
      UpdateClusterRequest.prototype.description = '';
      UpdateClusterRequest.prototype.labels = $util.emptyObject;
      UpdateClusterRequest.prototype.gatewayIpv4Address = '';
      UpdateClusterRequest.prototype.serviceAccountId = '';
      let $oneOfFields;
      Object.defineProperty(UpdateClusterRequest.prototype, 'internetGateway', {
        get: $util.oneOfGetter(($oneOfFields = ['gatewayIpv4Address'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      UpdateClusterRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        if (m.updateMask != null && m.hasOwnProperty('updateMask')) $root.contrib.google.protobuf.FieldMask.encode(m.updateMask, w.uint32(18).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(26).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(34).string(m.description);
        if (m.labels != null && m.hasOwnProperty('labels')) {
          for (let ks = Object.keys(m.labels), i = 0; i < ks.length; ++i) {
            w.uint32(42)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.labels[ks[i]])
              .ldelim();
          }
        }
        if (m.gatewayIpv4Address != null && m.hasOwnProperty('gatewayIpv4Address')) w.uint32(50).string(m.gatewayIpv4Address);
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(74).string(m.serviceAccountId);
        return w;
      };
      UpdateClusterRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.UpdateClusterRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            case 2:
              m.updateMask = $root.contrib.google.protobuf.FieldMask.decode(r, r.uint32());
              break;
            case 3:
              m.name = r.string();
              break;
            case 4:
              m.description = r.string();
              break;
            case 5:
              r.skip().pos++;
              if (m.labels === $util.emptyObject) m.labels = {};
              k = r.string();
              r.pos++;
              m.labels[k] = r.string();
              break;
            case 6:
              m.gatewayIpv4Address = r.string();
              break;
            case 9:
              m.serviceAccountId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateClusterRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateClusterMetadata = (function() {
      function UpdateClusterMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateClusterMetadata.prototype.clusterId = '';
      UpdateClusterMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      UpdateClusterMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.UpdateClusterMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateClusterMetadata;
    })();
  })(root);
  (function($root) {
    $root.CreateClusterRequest = (function() {
      function CreateClusterRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateClusterRequest.prototype.folderId = '';
      CreateClusterRequest.prototype.name = '';
      CreateClusterRequest.prototype.description = '';
      CreateClusterRequest.prototype.labels = $util.emptyObject;
      CreateClusterRequest.prototype.networkId = '';
      CreateClusterRequest.prototype.masterSpec = null;
      CreateClusterRequest.prototype.ipAllocationPolicy = null;
      CreateClusterRequest.prototype.gatewayIpv4Address = '';
      CreateClusterRequest.prototype.serviceAccountId = '';
      CreateClusterRequest.prototype.nodeServiceAccountId = '';
      let $oneOfFields;
      Object.defineProperty(CreateClusterRequest.prototype, 'internetGateway', {
        get: $util.oneOfGetter(($oneOfFields = ['gatewayIpv4Address'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      CreateClusterRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(18).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(26).string(m.description);
        if (m.labels != null && m.hasOwnProperty('labels')) {
          for (let ks = Object.keys(m.labels), i = 0; i < ks.length; ++i) {
            w.uint32(34)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.labels[ks[i]])
              .ldelim();
          }
        }
        if (m.networkId != null && m.hasOwnProperty('networkId')) w.uint32(42).string(m.networkId);
        if (m.masterSpec != null && m.hasOwnProperty('masterSpec')) $root.api.k8s.v1.MasterSpec.encode(m.masterSpec, w.uint32(50).fork()).ldelim();
        if (m.ipAllocationPolicy != null && m.hasOwnProperty('ipAllocationPolicy')) $root.api.k8s.v1.IPAllocationPolicy.encode(m.ipAllocationPolicy, w.uint32(58).fork()).ldelim();
        if (m.gatewayIpv4Address != null && m.hasOwnProperty('gatewayIpv4Address')) w.uint32(66).string(m.gatewayIpv4Address);
        if (m.serviceAccountId != null && m.hasOwnProperty('serviceAccountId')) w.uint32(74).string(m.serviceAccountId);
        if (m.nodeServiceAccountId != null && m.hasOwnProperty('nodeServiceAccountId')) w.uint32(82).string(m.nodeServiceAccountId);
        return w;
      };
      CreateClusterRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.CreateClusterRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            case 2:
              m.name = r.string();
              break;
            case 3:
              m.description = r.string();
              break;
            case 4:
              r.skip().pos++;
              if (m.labels === $util.emptyObject) m.labels = {};
              k = r.string();
              r.pos++;
              m.labels[k] = r.string();
              break;
            case 5:
              m.networkId = r.string();
              break;
            case 6:
              m.masterSpec = $root.api.k8s.v1.MasterSpec.decode(r, r.uint32());
              break;
            case 7:
              m.ipAllocationPolicy = $root.api.k8s.v1.IPAllocationPolicy.decode(r, r.uint32());
              break;
            case 8:
              m.gatewayIpv4Address = r.string();
              break;
            case 9:
              m.serviceAccountId = r.string();
              break;
            case 10:
              m.nodeServiceAccountId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateClusterRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateClusterMetadata = (function() {
      function CreateClusterMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateClusterMetadata.prototype.clusterId = '';
      CreateClusterMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        return w;
      };
      CreateClusterMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.CreateClusterMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateClusterMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListClusterOperationsRequest = (function() {
      function ListClusterOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClusterOperationsRequest.prototype.clusterId = '';
      ListClusterOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListClusterOperationsRequest.prototype.pageToken = '';
      ListClusterOperationsRequest.prototype.filter = '';
      ListClusterOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListClusterOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClusterOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            case 2:
              m.pageSize = r.int64();
              break;
            case 3:
              m.pageToken = r.string();
              break;
            case 4:
              m.filter = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListClusterOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListClusterOperationsResponse = (function() {
      function ListClusterOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClusterOperationsResponse.prototype.operations = $util.emptyArray;
      ListClusterOperationsResponse.prototype.nextPageToken = '';
      ListClusterOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListClusterOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClusterOperationsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.operations && m.operations.length)) m.operations = [];
              m.operations.push($root.api.operation.Operation.decode(r, r.uint32()));
              break;
            case 2:
              m.nextPageToken = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListClusterOperationsResponse;
    })();
  })(root);
  (function($root) {
    $root.ListClusterNodeGroupsRequest = (function() {
      function ListClusterNodeGroupsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClusterNodeGroupsRequest.prototype.clusterId = '';
      ListClusterNodeGroupsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListClusterNodeGroupsRequest.prototype.pageToken = '';
      ListClusterNodeGroupsRequest.prototype.filter = '';
      ListClusterNodeGroupsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListClusterNodeGroupsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClusterNodeGroupsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            case 2:
              m.pageSize = r.int64();
              break;
            case 3:
              m.pageToken = r.string();
              break;
            case 4:
              m.filter = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListClusterNodeGroupsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListClusterNodeGroupsResponse = (function() {
      function ListClusterNodeGroupsResponse(p) {
        this.nodeGroups = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListClusterNodeGroupsResponse.prototype.nodeGroups = $util.emptyArray;
      ListClusterNodeGroupsResponse.prototype.nextPageToken = '';
      ListClusterNodeGroupsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroups != null && m.nodeGroups.length) {
          for (let i = 0; i < m.nodeGroups.length; ++i) $root.api.k8s.v1.NodeGroup.encode(m.nodeGroups[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListClusterNodeGroupsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListClusterNodeGroupsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.nodeGroups && m.nodeGroups.length)) m.nodeGroups = [];
              m.nodeGroups.push($root.api.k8s.v1.NodeGroup.decode(r, r.uint32()));
              break;
            case 2:
              m.nextPageToken = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListClusterNodeGroupsResponse;
    })();
  })(root);
  (function($root) {
    $root.MasterSpec = (function() {
      function MasterSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      MasterSpec.prototype.zonalMasterSpec = null;
      let $oneOfFields;
      Object.defineProperty(MasterSpec.prototype, 'masterType', {
        get: $util.oneOfGetter(($oneOfFields = ['zonalMasterSpec'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      MasterSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zonalMasterSpec != null && m.hasOwnProperty('zonalMasterSpec')) $root.api.k8s.v1.ZonalMasterSpec.encode(m.zonalMasterSpec, w.uint32(10).fork()).ldelim();
        return w;
      };
      MasterSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.MasterSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.zonalMasterSpec = $root.api.k8s.v1.ZonalMasterSpec.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return MasterSpec;
    })();
  })(root);
  (function($root) {
    $root.ZonalMasterSpec = (function() {
      function ZonalMasterSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ZonalMasterSpec.prototype.zoneId = '';
      ZonalMasterSpec.prototype.internalV4AddressSpec = null;
      ZonalMasterSpec.prototype.externalV4AddressSpec = null;
      ZonalMasterSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(10).string(m.zoneId);
        if (m.internalV4AddressSpec != null && m.hasOwnProperty('internalV4AddressSpec')) $root.api.k8s.v1.InternalAddressSpec.encode(m.internalV4AddressSpec, w.uint32(18).fork()).ldelim();
        if (m.externalV4AddressSpec != null && m.hasOwnProperty('externalV4AddressSpec')) $root.api.k8s.v1.ExternalAddressSpec.encode(m.externalV4AddressSpec, w.uint32(26).fork()).ldelim();
        return w;
      };
      ZonalMasterSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ZonalMasterSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.zoneId = r.string();
              break;
            case 2:
              m.internalV4AddressSpec = $root.api.k8s.v1.InternalAddressSpec.decode(r, r.uint32());
              break;
            case 3:
              m.externalV4AddressSpec = $root.api.k8s.v1.ExternalAddressSpec.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ZonalMasterSpec;
    })();
  })(root);
  (function($root) {
    $root.InternalAddressSpec = (function() {
      function InternalAddressSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      InternalAddressSpec.prototype.subnetId = '';
      InternalAddressSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(18).string(m.subnetId);
        return w;
      };
      InternalAddressSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.InternalAddressSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 2:
              m.subnetId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return InternalAddressSpec;
    })();
  })(root);
  (function($root) {
    $root.ExternalAddressSpec = (function() {
      function ExternalAddressSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ExternalAddressSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        return w;
      };
      ExternalAddressSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ExternalAddressSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ExternalAddressSpec;
    })();
  })(root);
  (function($root) {
    $root.NodeGroup = (function() {
      function NodeGroup(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NodeGroup.prototype.id = '';
      NodeGroup.prototype.clusterId = '';
      NodeGroup.prototype.createdAt = null;
      NodeGroup.prototype.name = '';
      NodeGroup.prototype.description = '';
      NodeGroup.prototype.labels = $util.emptyObject;
      NodeGroup.prototype.status = 0;
      NodeGroup.prototype.nodeTemplate = null;
      NodeGroup.prototype.scalePolicy = null;
      NodeGroup.prototype.allocationPolicy = null;
      NodeGroup.prototype.instanceGroupId = '';
      NodeGroup.prototype.nodeVersion = '';
      NodeGroup.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.id != null && m.hasOwnProperty('id')) w.uint32(10).string(m.id);
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(18).string(m.clusterId);
        if (m.createdAt != null && m.hasOwnProperty('createdAt')) $root.contrib.google.protobuf.Timestamp.encode(m.createdAt, w.uint32(26).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(34).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(42).string(m.description);
        if (m.labels != null && m.hasOwnProperty('labels')) {
          for (let ks = Object.keys(m.labels), i = 0; i < ks.length; ++i) {
            w.uint32(50)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.labels[ks[i]])
              .ldelim();
          }
        }
        if (m.status != null && m.hasOwnProperty('status')) w.uint32(56).int32(m.status);
        if (m.nodeTemplate != null && m.hasOwnProperty('nodeTemplate')) $root.api.k8s.v1.NodeTemplate.encode(m.nodeTemplate, w.uint32(66).fork()).ldelim();
        if (m.scalePolicy != null && m.hasOwnProperty('scalePolicy')) $root.api.k8s.v1.ScalePolicy.encode(m.scalePolicy, w.uint32(74).fork()).ldelim();
        if (m.allocationPolicy != null && m.hasOwnProperty('allocationPolicy')) $root.api.k8s.v1.NodeGroupAllocationPolicy.encode(m.allocationPolicy, w.uint32(82).fork()).ldelim();
        if (m.instanceGroupId != null && m.hasOwnProperty('instanceGroupId')) w.uint32(90).string(m.instanceGroupId);
        if (m.nodeVersion != null && m.hasOwnProperty('nodeVersion')) w.uint32(98).string(m.nodeVersion);
        return w;
      };
      NodeGroup.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.NodeGroup(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.id = r.string();
              break;
            case 2:
              m.clusterId = r.string();
              break;
            case 3:
              m.createdAt = $root.contrib.google.protobuf.Timestamp.decode(r, r.uint32());
              break;
            case 4:
              m.name = r.string();
              break;
            case 5:
              m.description = r.string();
              break;
            case 6:
              r.skip().pos++;
              if (m.labels === $util.emptyObject) m.labels = {};
              k = r.string();
              r.pos++;
              m.labels[k] = r.string();
              break;
            case 7:
              m.status = r.int32();
              break;
            case 8:
              m.nodeTemplate = $root.api.k8s.v1.NodeTemplate.decode(r, r.uint32());
              break;
            case 9:
              m.scalePolicy = $root.api.k8s.v1.ScalePolicy.decode(r, r.uint32());
              break;
            case 10:
              m.allocationPolicy = $root.api.k8s.v1.NodeGroupAllocationPolicy.decode(r, r.uint32());
              break;
            case 11:
              m.instanceGroupId = r.string();
              break;
            case 12:
              m.nodeVersion = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      let Status = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'STATUS_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'PROVISIONING')] = 1;
        values[(valuesById[2] = 'RUNNING')] = 2;
        values[(valuesById[3] = 'RECONCILING')] = 3;
        values[(valuesById[4] = 'STOPPING')] = 4;
        values[(valuesById[5] = 'STOPPED')] = 5;
        values[(valuesById[6] = 'DELETING')] = 6;
        return values;
      })();
      NodeGroup.Status = Status;
      return NodeGroup;
    })();
  })(root);
  (function($root) {
    $root.NodeTemplate = (function() {
      function NodeTemplate(p) {
        this.metadata = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NodeTemplate.prototype.platformId = '';
      NodeTemplate.prototype.resourcesSpec = null;
      NodeTemplate.prototype.bootDiskSpec = null;
      NodeTemplate.prototype.metadata = $util.emptyObject;
      NodeTemplate.prototype.v4AddressSpec = null;
      NodeTemplate.prototype.schedulingPolicy = null;
      NodeTemplate.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.platformId != null && m.hasOwnProperty('platformId')) w.uint32(10).string(m.platformId);
        if (m.resourcesSpec != null && m.hasOwnProperty('resourcesSpec')) $root.api.k8s.v1.ResourcesSpec.encode(m.resourcesSpec, w.uint32(18).fork()).ldelim();
        if (m.bootDiskSpec != null && m.hasOwnProperty('bootDiskSpec')) $root.api.k8s.v1.DiskSpec.encode(m.bootDiskSpec, w.uint32(26).fork()).ldelim();
        if (m.metadata != null && m.hasOwnProperty('metadata')) {
          for (let ks = Object.keys(m.metadata), i = 0; i < ks.length; ++i) {
            w.uint32(34)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.metadata[ks[i]])
              .ldelim();
          }
        }
        if (m.v4AddressSpec != null && m.hasOwnProperty('v4AddressSpec')) $root.api.k8s.v1.NodeAddressSpec.encode(m.v4AddressSpec, w.uint32(42).fork()).ldelim();
        if (m.schedulingPolicy != null && m.hasOwnProperty('schedulingPolicy')) $root.api.k8s.v1.SchedulingPolicy.encode(m.schedulingPolicy, w.uint32(50).fork()).ldelim();
        return w;
      };
      NodeTemplate.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.NodeTemplate(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.platformId = r.string();
              break;
            case 2:
              m.resourcesSpec = $root.api.k8s.v1.ResourcesSpec.decode(r, r.uint32());
              break;
            case 3:
              m.bootDiskSpec = $root.api.k8s.v1.DiskSpec.decode(r, r.uint32());
              break;
            case 4:
              r.skip().pos++;
              if (m.metadata === $util.emptyObject) m.metadata = {};
              k = r.string();
              r.pos++;
              m.metadata[k] = r.string();
              break;
            case 5:
              m.v4AddressSpec = $root.api.k8s.v1.NodeAddressSpec.decode(r, r.uint32());
              break;
            case 6:
              m.schedulingPolicy = $root.api.k8s.v1.SchedulingPolicy.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return NodeTemplate;
    })();
  })(root);
  (function($root) {
    $root.NodeAddressSpec = (function() {
      function NodeAddressSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NodeAddressSpec.prototype.oneToOneNatSpec = null;
      NodeAddressSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.oneToOneNatSpec != null && m.hasOwnProperty('oneToOneNatSpec')) $root.api.k8s.v1.OneToOneNatSpec.encode(m.oneToOneNatSpec, w.uint32(10).fork()).ldelim();
        return w;
      };
      NodeAddressSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.NodeAddressSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.oneToOneNatSpec = $root.api.k8s.v1.OneToOneNatSpec.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return NodeAddressSpec;
    })();
  })(root);
  (function($root) {
    $root.OneToOneNatSpec = (function() {
      function OneToOneNatSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      OneToOneNatSpec.prototype.ipVersion = 0;
      OneToOneNatSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.ipVersion != null && m.hasOwnProperty('ipVersion')) w.uint32(8).int32(m.ipVersion);
        return w;
      };
      OneToOneNatSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.OneToOneNatSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.ipVersion = r.int32();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return OneToOneNatSpec;
    })();
  })(root);
  (function($root) {
    $root.IpVersion = (function() {
      let IpVersion = (function() {
        let valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'IP_VERSION_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'IPV4')] = 1;
        values[(valuesById[2] = 'IPV6')] = 2;
        return values;
      })();
      return IpVersion;
    })();
  })(root);
  (function($root) {
    $root.ResourcesSpec = (function() {
      function ResourcesSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ResourcesSpec.prototype.memory = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ResourcesSpec.prototype.cores = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ResourcesSpec.prototype.coreFraction = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ResourcesSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.memory != null && m.hasOwnProperty('memory')) w.uint32(8).int64(m.memory);
        if (m.cores != null && m.hasOwnProperty('cores')) w.uint32(16).int64(m.cores);
        if (m.coreFraction != null && m.hasOwnProperty('coreFraction')) w.uint32(24).int64(m.coreFraction);
        return w;
      };
      ResourcesSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ResourcesSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.memory = r.int64();
              break;
            case 2:
              m.cores = r.int64();
              break;
            case 3:
              m.coreFraction = r.int64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ResourcesSpec;
    })();
  })(root);
  (function($root) {
    $root.DiskSpec = (function() {
      function DiskSpec(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DiskSpec.prototype.diskTypeId = '';
      DiskSpec.prototype.diskSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      DiskSpec.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.diskTypeId != null && m.hasOwnProperty('diskTypeId')) w.uint32(10).string(m.diskTypeId);
        if (m.diskSize != null && m.hasOwnProperty('diskSize')) w.uint32(16).int64(m.diskSize);
        return w;
      };
      DiskSpec.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.DiskSpec();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.diskTypeId = r.string();
              break;
            case 2:
              m.diskSize = r.int64();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DiskSpec;
    })();
  })(root);
  (function($root) {
    $root.ScalePolicy = (function() {
      function ScalePolicy(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ScalePolicy.prototype.fixedScale = null;
      let $oneOfFields;
      Object.defineProperty(ScalePolicy.prototype, 'scaleType', {
        get: $util.oneOfGetter(($oneOfFields = ['fixedScale'])),
        set: $util.oneOfSetter($oneOfFields)
      });
      ScalePolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.fixedScale != null && m.hasOwnProperty('fixedScale')) $root.api.k8s.v1.ScalePolicy.FixedScale.encode(m.fixedScale, w.uint32(10).fork()).ldelim();
        return w;
      };
      ScalePolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ScalePolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.fixedScale = $root.api.k8s.v1.ScalePolicy.FixedScale.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      ScalePolicy.FixedScale = (function() {
        function FixedScale(p) {
          if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
        FixedScale.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        FixedScale.encode = function encode(m, w) {
          if (!w) w = $Writer.create();
          if (m.size != null && m.hasOwnProperty('size')) w.uint32(8).int64(m.size);
          return w;
        };
        FixedScale.decode = function decode(r, l) {
          if (!(r instanceof $Reader)) r = $Reader.create(r);
          let c = l === undefined ? r.len : r.pos + l,
            m = new $root.api.k8s.v1.ScalePolicy.FixedScale();
          while (r.pos < c) {
            let t = r.uint32();
            switch (t >>> 3) {
              case 1:
                m.size = r.int64();
                break;
              default:
                r.skipType(t & 7);
                break;
            }
          }
          return m;
        };
        return FixedScale;
      })();
      return ScalePolicy;
    })();
  })(root);
  (function($root) {
    $root.NodeGroupAllocationPolicy = (function() {
      function NodeGroupAllocationPolicy(p) {
        this.locations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NodeGroupAllocationPolicy.prototype.locations = $util.emptyArray;
      NodeGroupAllocationPolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.locations != null && m.locations.length) {
          for (let i = 0; i < m.locations.length; ++i) $root.api.k8s.v1.NodeGroupLocation.encode(m.locations[i], w.uint32(10).fork()).ldelim();
        }
        return w;
      };
      NodeGroupAllocationPolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.NodeGroupAllocationPolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.locations && m.locations.length)) m.locations = [];
              m.locations.push($root.api.k8s.v1.NodeGroupLocation.decode(r, r.uint32()));
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return NodeGroupAllocationPolicy;
    })();
  })(root);
  (function($root) {
    $root.NodeGroupLocation = (function() {
      function NodeGroupLocation(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      NodeGroupLocation.prototype.zoneId = '';
      NodeGroupLocation.prototype.subnetId = '';
      NodeGroupLocation.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.zoneId != null && m.hasOwnProperty('zoneId')) w.uint32(10).string(m.zoneId);
        if (m.subnetId != null && m.hasOwnProperty('subnetId')) w.uint32(18).string(m.subnetId);
        return w;
      };
      NodeGroupLocation.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.NodeGroupLocation();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.zoneId = r.string();
              break;
            case 2:
              m.subnetId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return NodeGroupLocation;
    })();
  })(root);
  (function($root) {
    $root.SchedulingPolicy = (function() {
      function SchedulingPolicy(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      SchedulingPolicy.prototype.preemptible = false;
      SchedulingPolicy.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.preemptible != null && m.hasOwnProperty('preemptible')) w.uint32(8).bool(m.preemptible);
        return w;
      };
      SchedulingPolicy.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.SchedulingPolicy();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.preemptible = r.bool();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return SchedulingPolicy;
    })();
  })(root);
  (function($root) {
    $root.NodeGroupService = function() {
      let ctor = grpc.makeGenericClientConstructor({
        get: {
          path: '/yandex.cloud.k8s.v1.NodeGroupService/Get',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.GetNodeGroupRequest,
          responseType: $root.api.k8s.v1.NodeGroup,
          requestSerialize: r => {
            return $root.api.k8s.v1.GetNodeGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.GetNodeGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.NodeGroup.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.NodeGroup.decode
        },
        list: {
          path: '/yandex.cloud.k8s.v1.NodeGroupService/List',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.ListNodeGroupsRequest,
          responseType: $root.api.k8s.v1.ListNodeGroupsResponse,
          requestSerialize: r => {
            return $root.api.k8s.v1.ListNodeGroupsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.ListNodeGroupsRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.ListNodeGroupsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.ListNodeGroupsResponse.decode
        },
        create: {
          path: '/yandex.cloud.k8s.v1.NodeGroupService/Create',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.CreateNodeGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.CreateNodeGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.CreateNodeGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        update: {
          path: '/yandex.cloud.k8s.v1.NodeGroupService/Update',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.UpdateNodeGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.UpdateNodeGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.UpdateNodeGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        delete: {
          path: '/yandex.cloud.k8s.v1.NodeGroupService/Delete',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.DeleteNodeGroupRequest,
          responseType: $root.api.operation.Operation,
          requestSerialize: r => {
            return $root.api.k8s.v1.DeleteNodeGroupRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.DeleteNodeGroupRequest.decode,
          responseSerialize: r => {
            return $root.api.operation.Operation.encode(r).finish();
          },
          responseDeserialize: $root.api.operation.Operation.decode
        },
        listOperations: {
          path: '/yandex.cloud.k8s.v1.NodeGroupService/ListOperations',
          requestStream: false,
          responseStream: false,
          requestType: $root.api.k8s.v1.ListNodeGroupOperationsRequest,
          responseType: $root.api.k8s.v1.ListNodeGroupOperationsResponse,
          requestSerialize: r => {
            return $root.api.k8s.v1.ListNodeGroupOperationsRequest.encode(r).finish();
          },
          requestDeserialize: $root.api.k8s.v1.ListNodeGroupOperationsRequest.decode,
          responseSerialize: r => {
            return $root.api.k8s.v1.ListNodeGroupOperationsResponse.encode(r).finish();
          },
          responseDeserialize: $root.api.k8s.v1.ListNodeGroupOperationsResponse.decode
        }
      });
      ctor.__endpointId = 'managed-kubernetes';
      return ctor;
    };
  })(root);
  (function($root) {
    $root.GetNodeGroupRequest = (function() {
      function GetNodeGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      GetNodeGroupRequest.prototype.nodeGroupId = '';
      GetNodeGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        return w;
      };
      GetNodeGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.GetNodeGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return GetNodeGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNodeGroupsRequest = (function() {
      function ListNodeGroupsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNodeGroupsRequest.prototype.folderId = '';
      ListNodeGroupsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListNodeGroupsRequest.prototype.pageToken = '';
      ListNodeGroupsRequest.prototype.filter = '';
      ListNodeGroupsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.folderId != null && m.hasOwnProperty('folderId')) w.uint32(10).string(m.folderId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListNodeGroupsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListNodeGroupsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.folderId = r.string();
              break;
            case 2:
              m.pageSize = r.int64();
              break;
            case 3:
              m.pageToken = r.string();
              break;
            case 4:
              m.filter = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListNodeGroupsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNodeGroupsResponse = (function() {
      function ListNodeGroupsResponse(p) {
        this.nodeGroups = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNodeGroupsResponse.prototype.nodeGroups = $util.emptyArray;
      ListNodeGroupsResponse.prototype.nextPageToken = '';
      ListNodeGroupsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroups != null && m.nodeGroups.length) {
          for (let i = 0; i < m.nodeGroups.length; ++i) $root.api.k8s.v1.NodeGroup.encode(m.nodeGroups[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListNodeGroupsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListNodeGroupsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.nodeGroups && m.nodeGroups.length)) m.nodeGroups = [];
              m.nodeGroups.push($root.api.k8s.v1.NodeGroup.decode(r, r.uint32()));
              break;
            case 2:
              m.nextPageToken = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListNodeGroupsResponse;
    })();
  })(root);
  (function($root) {
    $root.DeleteNodeGroupRequest = (function() {
      function DeleteNodeGroupRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteNodeGroupRequest.prototype.nodeGroupId = '';
      DeleteNodeGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        return w;
      };
      DeleteNodeGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.DeleteNodeGroupRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteNodeGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.DeleteNodeGroupMetadata = (function() {
      function DeleteNodeGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      DeleteNodeGroupMetadata.prototype.nodeGroupId = '';
      DeleteNodeGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        return w;
      };
      DeleteNodeGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.DeleteNodeGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return DeleteNodeGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.UpdateNodeGroupRequest = (function() {
      function UpdateNodeGroupRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateNodeGroupRequest.prototype.nodeGroupId = '';
      UpdateNodeGroupRequest.prototype.updateMask = null;
      UpdateNodeGroupRequest.prototype.name = '';
      UpdateNodeGroupRequest.prototype.description = '';
      UpdateNodeGroupRequest.prototype.labels = $util.emptyObject;
      UpdateNodeGroupRequest.prototype.scalePolicy = null;
      UpdateNodeGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        if (m.updateMask != null && m.hasOwnProperty('updateMask')) $root.contrib.google.protobuf.FieldMask.encode(m.updateMask, w.uint32(18).fork()).ldelim();
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(26).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(34).string(m.description);
        if (m.labels != null && m.hasOwnProperty('labels')) {
          for (let ks = Object.keys(m.labels), i = 0; i < ks.length; ++i) {
            w.uint32(42)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.labels[ks[i]])
              .ldelim();
          }
        }
        if (m.scalePolicy != null && m.hasOwnProperty('scalePolicy')) $root.api.k8s.v1.ScalePolicy.encode(m.scalePolicy, w.uint32(50).fork()).ldelim();
        return w;
      };
      UpdateNodeGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.UpdateNodeGroupRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
              break;
            case 2:
              m.updateMask = $root.contrib.google.protobuf.FieldMask.decode(r, r.uint32());
              break;
            case 3:
              m.name = r.string();
              break;
            case 4:
              m.description = r.string();
              break;
            case 5:
              r.skip().pos++;
              if (m.labels === $util.emptyObject) m.labels = {};
              k = r.string();
              r.pos++;
              m.labels[k] = r.string();
              break;
            case 6:
              m.scalePolicy = $root.api.k8s.v1.ScalePolicy.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateNodeGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.UpdateNodeGroupMetadata = (function() {
      function UpdateNodeGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      UpdateNodeGroupMetadata.prototype.nodeGroupId = '';
      UpdateNodeGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        return w;
      };
      UpdateNodeGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.UpdateNodeGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return UpdateNodeGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.CreateNodeGroupRequest = (function() {
      function CreateNodeGroupRequest(p) {
        this.labels = {};
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateNodeGroupRequest.prototype.clusterId = '';
      CreateNodeGroupRequest.prototype.name = '';
      CreateNodeGroupRequest.prototype.description = '';
      CreateNodeGroupRequest.prototype.labels = $util.emptyObject;
      CreateNodeGroupRequest.prototype.nodeTemplate = null;
      CreateNodeGroupRequest.prototype.scalePolicy = null;
      CreateNodeGroupRequest.prototype.allocationPolicy = null;
      CreateNodeGroupRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.clusterId != null && m.hasOwnProperty('clusterId')) w.uint32(10).string(m.clusterId);
        if (m.name != null && m.hasOwnProperty('name')) w.uint32(18).string(m.name);
        if (m.description != null && m.hasOwnProperty('description')) w.uint32(26).string(m.description);
        if (m.labels != null && m.hasOwnProperty('labels')) {
          for (let ks = Object.keys(m.labels), i = 0; i < ks.length; ++i) {
            w.uint32(34)
              .fork()
              .uint32(10)
              .string(ks[i])
              .uint32(18)
              .string(m.labels[ks[i]])
              .ldelim();
          }
        }
        if (m.nodeTemplate != null && m.hasOwnProperty('nodeTemplate')) $root.api.k8s.v1.NodeTemplate.encode(m.nodeTemplate, w.uint32(42).fork()).ldelim();
        if (m.scalePolicy != null && m.hasOwnProperty('scalePolicy')) $root.api.k8s.v1.ScalePolicy.encode(m.scalePolicy, w.uint32(50).fork()).ldelim();
        if (m.allocationPolicy != null && m.hasOwnProperty('allocationPolicy')) $root.api.k8s.v1.NodeGroupAllocationPolicy.encode(m.allocationPolicy, w.uint32(58).fork()).ldelim();
        return w;
      };
      CreateNodeGroupRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.CreateNodeGroupRequest(),
          k;
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.clusterId = r.string();
              break;
            case 2:
              m.name = r.string();
              break;
            case 3:
              m.description = r.string();
              break;
            case 4:
              r.skip().pos++;
              if (m.labels === $util.emptyObject) m.labels = {};
              k = r.string();
              r.pos++;
              m.labels[k] = r.string();
              break;
            case 5:
              m.nodeTemplate = $root.api.k8s.v1.NodeTemplate.decode(r, r.uint32());
              break;
            case 6:
              m.scalePolicy = $root.api.k8s.v1.ScalePolicy.decode(r, r.uint32());
              break;
            case 7:
              m.allocationPolicy = $root.api.k8s.v1.NodeGroupAllocationPolicy.decode(r, r.uint32());
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateNodeGroupRequest;
    })();
  })(root);
  (function($root) {
    $root.CreateNodeGroupMetadata = (function() {
      function CreateNodeGroupMetadata(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      CreateNodeGroupMetadata.prototype.nodeGroupId = '';
      CreateNodeGroupMetadata.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        return w;
      };
      CreateNodeGroupMetadata.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.CreateNodeGroupMetadata();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return CreateNodeGroupMetadata;
    })();
  })(root);
  (function($root) {
    $root.ListNodeGroupOperationsRequest = (function() {
      function ListNodeGroupOperationsRequest(p) {
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNodeGroupOperationsRequest.prototype.nodeGroupId = '';
      ListNodeGroupOperationsRequest.prototype.pageSize = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
      ListNodeGroupOperationsRequest.prototype.pageToken = '';
      ListNodeGroupOperationsRequest.prototype.filter = '';
      ListNodeGroupOperationsRequest.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.nodeGroupId != null && m.hasOwnProperty('nodeGroupId')) w.uint32(10).string(m.nodeGroupId);
        if (m.pageSize != null && m.hasOwnProperty('pageSize')) w.uint32(16).int64(m.pageSize);
        if (m.pageToken != null && m.hasOwnProperty('pageToken')) w.uint32(26).string(m.pageToken);
        if (m.filter != null && m.hasOwnProperty('filter')) w.uint32(34).string(m.filter);
        return w;
      };
      ListNodeGroupOperationsRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListNodeGroupOperationsRequest();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              m.nodeGroupId = r.string();
              break;
            case 2:
              m.pageSize = r.int64();
              break;
            case 3:
              m.pageToken = r.string();
              break;
            case 4:
              m.filter = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListNodeGroupOperationsRequest;
    })();
  })(root);
  (function($root) {
    $root.ListNodeGroupOperationsResponse = (function() {
      function ListNodeGroupOperationsResponse(p) {
        this.operations = [];
        if (p) for (let ks = Object.keys(p), i = 0; i < ks.length; ++i) if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
      ListNodeGroupOperationsResponse.prototype.operations = $util.emptyArray;
      ListNodeGroupOperationsResponse.prototype.nextPageToken = '';
      ListNodeGroupOperationsResponse.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.operations != null && m.operations.length) {
          for (let i = 0; i < m.operations.length; ++i) $root.api.operation.Operation.encode(m.operations[i], w.uint32(10).fork()).ldelim();
        }
        if (m.nextPageToken != null && m.hasOwnProperty('nextPageToken')) w.uint32(18).string(m.nextPageToken);
        return w;
      };
      ListNodeGroupOperationsResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        let c = l === undefined ? r.len : r.pos + l,
          m = new $root.api.k8s.v1.ListNodeGroupOperationsResponse();
        while (r.pos < c) {
          let t = r.uint32();
          switch (t >>> 3) {
            case 1:
              if (!(m.operations && m.operations.length)) m.operations = [];
              m.operations.push($root.api.operation.Operation.decode(r, r.uint32()));
              break;
            case 2:
              m.nextPageToken = r.string();
              break;
            default:
              r.skipType(t & 7);
              break;
          }
        }
        return m;
      };
      return ListNodeGroupOperationsResponse;
    })();
  })(root);
  registar.register('api.k8s.v1', root);
  root.api = registar.lookup('api');
  root.contrib = registar.lookup('contrib');
  return root;
})();