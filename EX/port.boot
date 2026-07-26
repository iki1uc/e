[port.boot]
version = 1.0
type = "boot-core"
zero = 0

boot.rule = "Startet das DE-System, initialisiert Module, lädt Sequenzen und aktiviert Kernfunktionen"

boot.bind.pq      = "port.PQ0"
boot.bind.ex      = "PQ.EX"
boot.bind.room    = "port.room"
boot.bind.matrix  = "port.matrix"
boot.bind.data    = "port.data"
boot.bind.status  = "port.status"
boot.bind.team    = "port.team"
boot.bind.screen  = "port.screen"
boot.bind.visuals = "port.visuals"
boot.bind.grid    = "port.9x9"
boot.bind.win0    = "port.win0"
boot.bind.user    = "port.user"
boot.bind.fit     = "port.fit"
boot.bind.fix     = "port.fix"
boot.bind.allign  = "port.allign"
boot.bind.capture = "port.capture"
boot.bind.build   = "port.build"
boot.bind.send    = "port.send"
boot.bind.score   = "port.score"
boot.bind.sync    = "port.sync"
boot.bind.core    = "port.core"
boot.bind.lan     = "port.lan"
boot.bind.api     = "port.api"
boot.bind.host    = "port.host"

boot.mode = ["auto","manual","seq","vector","zone","state","team","core","visual","grid","system","runtime"]

boot.sequence = [
  "boot-init",
  "boot-load-core",
  "boot-load-room",
  "boot-load-matrix",
  "boot-load-team",
  "boot-load-screen",
  "boot-load-visuals",
  "boot-load-grid",
  "boot-load-seq",
  "boot-activate-core",
  "boot-activate-system"
]

boot.check = [
  "core.ready",
  "room.ready",
  "matrix.ready",
  "team.ready",
  "screen.ready",
  "visuals.ready",
  "grid.ready",
  "seq.ready",
  "system.ready"
]

boot.actions = [
  "boot-start",
  "boot-restart",
  "boot-refresh",
  "boot-verify",
  "boot-sync",
  "boot-complete"
]

boot.autoboot = true
boot.interval = "5s"

boot.state = "active"
