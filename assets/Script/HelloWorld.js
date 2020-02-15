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
    
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    },

    onTouchBegan: function (event) {
        //var touchLoc = event.touch.getLocation();
        // var scene = cc.director.getScene();
        // var bullet = cc.instantiate(this.bullet);
        // bullet.position = touchLoc;
        // bullet.active = true;
        // scene.addChild(bullet);



        var worldPos =   event.touch.getLocation(); 
        var bulletPoint = Game.BulletManager.node.convertToNodeSpaceAR(worldPos);
        var bulletNode  = Game.BulletManager.getBullet();
        bulletNode.rotation = 45;
        var bullet = bulletNode.getComponent("bullet");

        bullet.init("123", GLB.NormalBulletSpeed);



    },


   fire: function    (event) {

        var bulletNode = Game.BulletManager.getBullet();

       // var worldPos = this.firePoint.convertToWorldSpaceAR(cc.v2(0, 0));
       // var bulletPoint = Game.BulletManager.node.convertToNodeSpaceAR(worldPos);
        //var bulletPoint = (cc.v2(50, 50));
        var worldPos =   event.touch.getLocation(); (cc.v2(0, 0));
        var bulletPoint = Game.BulletManager.node.convertToNodeSpaceAR(worldPos);
        bulletNode.rotation = 90;

        // bulletNode.position = bulletPoint;
        // if (GLB.userInfo.id === this.playerId) {
        //     bulletNode.rotation = 0;
        // } else {
        //     bulletNode.rotation = 180;
        // }

        var bullet = bulletNode.getComponent("bullet");
        // if (this.playerId === GLB.userInfo.id) {
        //     bullet.init(this.playerId, GLB.NormalBulletSpeed);
        // } else {
        //     bullet.init(this.playerId, -GLB.NormalBulletSpeed);
        // }

    //    bullet.init("123", -GLB.NormalBulletSpeed);

        //cc.audioEngine.play(this.fireClip, false, 1);
    },



        start: function () {

    
 return;


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


                        Game.PlayerManager.self.fire();

                        Game.PlayerManager.rival.fire();

        
        return;


        cc.log("-----------------------------2 Node.getComponentInChildren");

        var label1 = cc.find("Canvas/info");      
        cc.log("cc.find:",label1);
        label1.String =  'started good cc.find';
        
        label1.Angle = -90 ;

        return;

        this.infoScript.string = " ";
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





    frameUpdate: function(rsp) {
        if (rsp.frameItems) {
            for (var i = 0; i < rsp.frameItems.length; i++) {
                if (Game.GameManager.gameState === GameState.Over) {
                    return;
                }
                var info = rsp.frameItems[i];
                var cpProto = JSON.parse(info.cpProto);
                if (info.cpProto.indexOf(GLB.DIRECTION) >= 0) {
                    if (GLB.userInfo.id === info.srcUserID) {
                        Game.PlayerManager.self.setDirect(cpProto.direction);
                    } else {
                        Game.PlayerManager.rival.setDirect(cpProto.direction);
                    }
                }
                if (info.cpProto.indexOf(GLB.FIRE) >= 0) {
                    if (GLB.userInfo.id === info.srcUserID) {
                        Game.PlayerManager.self.fire();
                    } else {
                        Game.PlayerManager.rival.fire();
                    }
                }

                if (info.cpProto.indexOf(GLB.HURT) >= 0) {
                    if (GLB.userInfo.id === cpProto.playerId) {
                        Game.PlayerManager.self.hurt();
                    } else {
                        Game.PlayerManager.rival.hurt();
                    }
                }
                if (info.cpProto.indexOf(GLB.SHOOT_GUN_ITEM) >= 0) {
                    Game.ItemManager.itemSpawn(cpProto.itemId);
                }
                if (info.cpProto.indexOf(GLB.ITEM_GET) >= 0) {
                    Game.ItemManager.itemGet(cpProto.itemId, cpProto.playerId);
                }
                if (info.cpProto.indexOf(GLB.SPAWN_SLATE) >= 0) {
                    Game.SlateManager.spawnSlate(info.srcUserID);
                }

                if (info.cpProto.indexOf(GLB.SLATE_HITTING) >= 0) {
                    Game.SlateManager.hitSlate(cpProto.slateId);
                }
            }
        }
        if (Game.GameManager.gameState === GameState.Over) {
            return;
        }
        if (Game.PlayerManager) {
            if (Game.PlayerManager.self) {
                Game.PlayerManager.self.move();
            }
            if (Game.PlayerManager.rival) {
                Game.PlayerManager.rival.move();
            }
        }
        if (Game.ItemManager) {
            Game.ItemManager.move();
        }
    },


});
