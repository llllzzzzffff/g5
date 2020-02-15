//var mvs = require("Matchvs");
cc.Class({
    extends: cc.Component,

    init(playerId, speed) {
        this.hostPlayerId = playerId;
        this.speed = speed;
    },

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

    destroyBullet(isEffect) {
        if (isEffect) {
            Game.BulletManager.boomEffect(this.node);
        }
        Game.BulletManager.recycleBullet(this.node);
    },

    sendSlateHurtMsg(slateId) {
        if (Game.GameManager.gameState === GameState.Play && GLB.isRoomOwner) {
            mvs.engine.sendFrameEvent(JSON.stringify({
                action: GLB.SLATE_HITTING,
                slateId: slateId,
            }));
        }
    },

    sendItemGetMsg(itemId) {
        if (Game.GameManager.gameState === GameState.Play && GLB.isRoomOwner) {
            mvs.engine.sendFrameEvent(JSON.stringify({
                action: GLB.ITEM_GET,
                playerId: this.hostPlayerId,
                itemId: itemId
            }));
        }
    },

    sendHurtMsg(targetPlayer) {
        if (Game.GameManager.gameState === GameState.Play && GLB.isRoomOwner) {
            mvs.engine.sendFrameEvent(JSON.stringify({
                action: GLB.HURT,
                playerId: targetPlayer.playerId
            }));
        }
    },

    update(dt) {
        this.node.y = this.node.y + (this.speed * dt);
        this.node.x = this.node.x + (this.speed * dt);
    }
});
