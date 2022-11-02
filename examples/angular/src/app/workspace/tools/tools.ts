export const Tools = [
  {
    name: '硬件模块库',
    expand: true,
    list: [
      {
        name: 'rectangle',
        icon: 'icon-rect',
        data: {
          text: 'CPU',
          rect: {
            width: 100,
            height: 100
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          name: 'rectangle',
          //icon: '\ue64d',
          iconFamily: 'topology',
          iconColor: '#2f54eb'
        }
      },
      {
        name: 'circle',
        icon: 'icon-circle',
        data: {
          text: 'FPGA',
          rect: {
            width: 100,
            height: 100
          },
          name: 'circle',
          textMaxLine: 1
        }
      }
    ]
  },
  {
    name: '接口库',
    expand: true,
    list: [
      {
        name: '开始/结束',
        icon: 'icon-flow-start',
        data: {
          text: 'RS232',
          rect: {
            width: 120,
            height: 40
          },
          borderRadius: 0.5,
          name: 'yellowInterface'
        }
      },
      {
        name: '流程',
        icon: 'icon-rectangle',
        data: {
          text: '以太网口',
          rect: {
            width: 120,
            height: 40
          },
          name: 'greenInterface'
        }
      }
    ]
  }
];
