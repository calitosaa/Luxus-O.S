# 27 — Robótica

> ROS/ROS2, SLAM, cinemática, planificación de movimiento, sensores, actuadores y control.

## Mapa del dominio

```
27-robotica/
├── ros2/
│   ├── ros2-internals.md              # DDS, nodes, topics, services, actions
│   ├── ros2-qos.md                    # Quality of Service policies
│   └── nav2.md                        # Navigation stack
├── slam/
│   ├── slam-introduccion.md           # SLAM problem: map + localization
│   ├── gmapping.md                    # Particle filter SLAM
│   ├── cartographer.md                # Google Cartographer: sparse pose graph
│   └── orb-slam3.md                   # Feature-based visual SLAM
├── cinematica/
│   ├── cinematica-directa.md          # DH parameters, transformation matrices
│   └── cinematica-inversa.md          # IK methods, Jacobian, redundancy
├── planificacion/
│   ├── rrt.md                         # Rapidly-exploring Random Trees
│   └── a-star-robotica.md
├── control/
│   ├── pid-control.md
│   └── model-predictive-control.md
├── sensores/
│   ├── lidar.md
│   ├── imu.md
│   └── sensor-fusion.md               # Kalman filter, EKF, UKF
└── _index.md
```

## Topics pendientes

- [ ] ORB-SLAM3 visual SLAM — fuente: [ORB-SLAM3 paper (Campos et al. 2021)](https://arxiv.org/abs/2007.11898)
- [ ] ROS2 DDS middleware — fuente: [ROS2 design docs](https://design.ros2.org/)
- [ ] Extended Kalman Filter for sensor fusion — fuente: [Thrun, Burgard & Fox, Probabilistic Robotics]

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Topics pendientes | 3 |

---

*Última actualización: 2026-05*
