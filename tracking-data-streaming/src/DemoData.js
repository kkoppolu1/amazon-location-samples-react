// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

export const DEMO_POSITION_UPDATE_INTERVAL = 5000; // REQUIRED - How often the position updates in the demo.
export const POSITION_UPDATES_TRUCK_1 = [
    {
        Data: {
            DeviceId: "Truck-1",
            Position: [-122.03573526666666, 37.41187446666667],
        },
        PartitionKey: "1"
    },
    {
        Data: {
            DeviceId: "Truck-1",
            Position: [-122.03573626666666, 37.41187446666667],
        },
        PartitionKey: "2"
    },
    {
        Data: {
            DeviceId: "Truck-1",
            Position: [-122.03573726666666, 37.41187446666667],
        },
        PartitionKey: "2"
    },
    {
        Data: {
            DeviceId: "Truck-1",
            Position: [-122.03573826666666, 37.41187446666667],
        },
        PartitionKey: "2"
    },
    {
        Data: {
            DeviceId: "Truck-1",
            Position: [-122.03573926666666, 37.41187446666667],
        },
        PartitionKey: "3"
    },
    {
        Data: {
            DeviceId: "Truck-1",
            Position: [-122.03573926666666, 37.41187446666667],
        },
        PartitionKey: "2"
    },
    {
        Data: {
            DeviceId: "Truck-1",
            Position: [-122.03573926666666, 37.41187446666667],
        },
        PartitionKey: "2"
    },
    {
        Data: {
            DeviceId: "Truck-1",
            Position: [-122.03573926666666, 37.41187446666667],
        },
        PartitionKey: "2"
    }
];

export const POSITION_UPDATES_TRUCK_2 = [
    {
        Data: {
            DeviceId: "Truck-2",
            Position: [-122.03573526666666, 37.41187446666667],
        },
        PartitionKey: "3"
    },
    {
        Data: {
            DeviceId: "Truck-2",
            Position: [-122.03573626666666, 37.41187446666667],
        },
        PartitionKey: "3"
    },
    {
        Data: {
            DeviceId: "Truck-2",
            Position: [-122.03573726666666, 37.41187446666667],
        },
        PartitionKey: "2"
    },
    {
        Data: {
            DeviceId: "Truck-2",
            Position: [-122.03673826666666, 37.41187446666667],
        },
        PartitionKey: "1"
    },
    {
        Data: {
            DeviceId: "Truck-2",
            Position: [-122.03773926666666, 37.41187446666667],
        },
        PartitionKey: "2"
    },
    {
        Data: {
            DeviceId: "Truck-2",
            Position: [-122.03873926666666, 37.41187446666667],
        },
        PartitionKey: "3"
    },
    {
        Data: {
            DeviceId: "Truck-2",
            Position: [-122.03973926666666, 37.41187446666667],
        },
        PartitionKey: "3"
    },
    {
        Data: {
            DeviceId: "Truck-2",
            Position: [-122.04073926666666, 37.41187446666667],
        },
        PartitionKey: "3"
    }
];

export const DEMO_GEOFENCES = [
    {
        "GeofenceId": "Parking",
        "Polygon": [
            [-122.039, 37.541000],
            [-122.039, 37.543000],
            [-122.041, 37.541000],
            [-122.041, 37.543000]
        ]
    }
]
