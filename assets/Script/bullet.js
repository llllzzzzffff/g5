var mvs = require("Matchvs");
//var mvs = require("matchvs");
cc.Class({
    extends: cc.Component,

    //初始化
    init(playerId, speed) {
        //子弹是那个玩家发射的
        this.hostPlayerId = playerId;  
        //子弹速度
        this.speed = speed;
    },




    //根据分组不同处理碰撞结果
    onCollisionEnter: function(other) {
        var group = cc.game.groupList[other.node.groupIndex];
        if (group === 'player') {
            var player = other.node.getComponent('player');
            this.sendHurtMsg(player);
            this.destroyBullet(true);
        }
        else if (group === 'item') {
            var item = other.node.getComponent('shootgunItem');
            this.sendItemGetMsg(item.itemId);
            other.node.getComponent(cc.BoxCollider).enabled = false;
            this.destroyBullet(false);
        } else if (group === 'ground') {
            this.destroyBullet(true);
        } else if (group === 'slate') {
            var slate = other.node.getComponent("slate");
            if (slate.hostPlayerId !== this.hostPlayerId) {
                this.sendSlateHurtMsg(slate.slateId);
                this.destroyBullet(true);
            }
        }
    },

    //销毁子弹的情况
    destroyBullet(isEffect) {
        if (isEffect) {
            Game.BulletManager.boomEffect(this.node);
        }
        Game.BulletManager.recycleBullet(this.node);
    },



    //发送玩家受伤消息
    sendHurtMsg(targetPlayer) {
        if (Game.GameManager.gameState === GameState.Play && GLB.isRoomOwner) {
            mvs.engine.sendFrameEvent(JSON.stringify({
                action: GLB.HURT,
                playerId: targetPlayer.playerId
            }));
        }
    },



    //发送子弹碰到物品消息
    sendItemGetMsg(itemId) {
        if (Game.GameManager.gameState === GameState.Play && GLB.isRoomOwner) {
            mvs.engine.sendFrameEvent(JSON.stringify({
                action: GLB.ITEM_GET,
                playerId: this.hostPlayerId,
                itemId: itemId
            }));
        }
    },


    //发送石板受伤消息
    sendSlateHurtMsg(slateId) {
        if (Game.GameManager.gameState === GameState.Play && GLB.isRoomOwner) {
            mvs.engine.sendFrameEvent(JSON.stringify({
                action: GLB.SLATE_HITTING,
                slateId: slateId,
            }));
        }
    },


    //更新子弹位置
    update(dt) {
        this.node.y = this.node.y + (this.speed * dt);
        this.node.x = this.node.x + (this.speed * dt);
    }


});
