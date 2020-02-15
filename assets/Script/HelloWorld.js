var player2 = require("player2")


var bbbb = cc.Class({
    extends: cc.Component,

    properties: {

        
            // 声明 player 属性
            player22: {
                default: null,
                type:cc.Node
            },

            player23: {
                default: null,
                type: cc.Node
            },
  
  


        label: {
            default: null,
            tooltip: "lllllllllllllllore of player",
            type: cc.Label
        },

        infoScript: {
            default: null,
            tooltip: "infoScript",
            type: cc.Label
        },


        any: [],   




        score: {
            default: 0,
            displayName: "Score (player)",
            tooltip: "The score of player",
        },

        names: {
            default: [],
            type: [cc.String]   // 用 type 指定数组的每个元素都是字符串类型
        },

        enemies: {
            default: [],
            type: [cc.Node]     // type 同样写成数组，提高代码可读性
        },


        height: 20,       // number
        type: "actor",    // string
        loaded: false,    // boolean                
        target: null,     // object
        pos: cc.Vec2,
        pos2: new cc.Vec2(10, 20),
        values:  [cc.Vec2],
        color2: new cc.Color(255, 255, 255, 128),   
        bools:   [cc.Boolean],
        strings: [cc.String],
        floats:  [cc.Float],
        ints:    [cc.Integer],
        nodes:   [cc.Node],
        target: cc.Node,
        frames: [cc.SpriteFrame],

        speed: 0,
        firePoint: cc.Node,
        hearts: [cc.Node],
        slatePoint: cc.Node,
        heart: 3,
        fireClip: {
            default: null,
            url: cc.AudioClip
        },
        hurtClip: {
            default: null,
            url: cc.AudioClip
        },
        deadClip: {
            default: null,
            url: cc.AudioClip
        },
        tankBoom: {
            default: null,
            type: cc.Prefab
        },
        hurtBoom: {
            default: null,
            type: cc.Prefab
        },

playerId:0,
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },



    // use this for initialization
    onLoad: function () {
       this.label.string =  "load";
    },


   fire: function    () {
        var bulletNode = Game.BulletManager.getBullet();

       // var worldPos = this.firePoint.convertToWorldSpaceAR(cc.v2(0, 0));
       // var bulletPoint = Game.BulletManager.node.convertToNodeSpaceAR(worldPos);


        var worldPos = (cc.v2(0, 0));
        var bulletPoint = (cc.v2(50, 50));

        // bulletNode.position = bulletPoint;
        // if (GLB.userInfo.id === this.playerId) {
        //     bulletNode.rotation = 0;
        // } else {
        //     bulletNode.rotation = 180;
        // }

        bulletNode.rotation = 180;
        var bullet = bulletNode.getComponent("bullet");
        // if (this.playerId === GLB.userInfo.id) {
        //     bullet.init(this.playerId, GLB.NormalBulletSpeed);
        // } else {
        //     bullet.init(this.playerId, -GLB.NormalBulletSpeed);
        // }

        bullet.init("123", -GLB.NormalBulletSpeed);

        //cc.audioEngine.play(this.fireClip, false, 1);
    },



        start: function () {


    cc.log("will fire: ");

             this.fire();
    cc.log("end fire ");

var  child =this.node.getChildByName("player3");
        	cc.log("getChildByName, player3: ",ccf);



             var  ccf = cc.find("Canvas/player2");
        	cc.log("find, player3: ",ccf);


      cc.log("this: " + this.player23.name,this.player23); 

            
 return;
            
            cc.log("-----------------------------1 可以争取查找节点的方式 Node.getComponent ");
            var label1 = this.node.getChildByName("info");      
            cc.log("可以争取查找节点的方式 Node.getComponent:",label1);
            var showlabel = label1.getComponent(cc.Label);
            cc.log(showlabel);
            if (showlabel)
            {
               //this.infoScript.string = "cc.Label方式寻找:"+(showlabel instanceof cc.Label)  ;
                cc.log("cc.Label方式寻找 info 的类型是否为cc.Label:", (showlabel instanceof cc.Label));
                cc.log(showlabel);
                showlabel.String =  'started good getComponent';
            }
            else
            {
                //this.infoScript.string = "cc.Label方式寻找 没有找到info 的类型"+(showlabel instanceof cc.Label)  ;
                cc.log("cc.Label方式寻找 没有找到info 的类型");
            }

 return;
 



          },

    // called every frame
    update: function (dt) {

    // this._timer += dt;
    // if ( this._timer >= 5.0 ) {
    //   console.log('I am done! _timer:',_timer);
    //   this.enabled = false;
    // }

  },




    test1: function () {



        
        cc.log("-----------------------------2 Node.getComponentInChildren");
          
        //let searchNode = cc.find("Canvas/SearchNode"); //通过全路径获取对应节点
        //let scriptComponent = searchNode.getComponent("Search"); //通过脚本类名Search获取组件
        //let scriptComponent = searchNode.getComponent(cc.Component);

        var label1 = cc.find("Canvas/info");      
        cc.log("cc.find:",label1);
        label1.String =  'started good cc.find';
        
        label1.Angle = -90 ;

        return;
       // this.active = false;
        //this.label.string = this.score;
       
         //this.info.string = " ";
        this.infoScript.string = " ";
        //this.info.string = " ";




        cc.log("this 的类型是否为当前组件var = bbbb的别名:", this instanceof bbbb);
        //cc.log("this 的类型是否为当前组件var = bbbb的别名:", this instanceof HelloWorld);
        cc.log(this);
        cc.log("-----------------------------");


        var node = this.node;
        cc.log("this.node 的类型是否为cc.Node:", (node instanceof cc.Node));
        cc.log(node);
        cc.log("-----------------------------");
        /*
        //node的children属性是是层级控制器的各个控件
        children:Array(5)
        0:cc_Node {_name: "Main Camera", }
        1:cc_Node {_name: "background", 
        2:cc_Node {_name: "pic1", }
        3:cc_Node {_name: "label",}
        4:cc_Node {_name: "New Button",}
        length:5
        */





    },


});
