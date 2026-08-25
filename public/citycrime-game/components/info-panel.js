// InfoPanel.js - Vue Component for Debug Panels and Controls
export const InfoPanel = {
    template: `
        <!-- Debug Button -->
        <button class="debug-button" @click="toggleDebugPanels" v-show="!debugVisible && !isTouchDevice">
            🐛 Debug
        </button>

        <!-- Left Panel -->
        <div class="panel panel-left" :class="{ visible: debugVisible, hidden: isHidden }">
            <button class="hide-button" @click="hideDebugPanels">✕ Hide</button>
            <h2>Vehicle Data</h2>
            <div>
                <div class="stat-box">
                    <div class="stat-label">Speed</div>
                    <div class="stat-value-large stat-value-green">{{ speed.toFixed(1) }} km/h</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">Position X</div>
                    <div class="stat-value">{{ position.x.toFixed(2) }}</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">Position Y</div>
                    <div class="stat-value">{{ position.y.toFixed(2) }}</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">Position Z</div>
                    <div class="stat-value">{{ position.z.toFixed(2) }}</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">Rotation</div>
                    <div class="stat-value">{{ rotation.toFixed(1) }}°</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">Direction</div>
                    <div class="stat-value">{{ direction }}</div>
                </div>
            </div>
            <div class="controls">
                <h3>Controls</h3>
                <div>⬆️ W - Forward</div>
                <div>⬇️ S - Backward</div>
                <div>⬅️ A - Left</div>
                <div>➡️ D - Right</div>
                <div>🚗 Space - Brake</div>
                <div>🔄 Enter - Reset</div>
            </div>
        </div>

        <!-- Right Panel -->
        <div class="panel panel-right" :class="{ visible: debugVisible, hidden: isHidden }">
            <h2>Game Statistics</h2>
            <div>
                <div class="stat-box">
                    <div class="stat-label">Race Time</div>
                    <div class="stat-value-large stat-value-blue">
                        <span v-if="!isRacing">START</span>
                        <span v-else>{{ raceTime.toFixed(2) }}s</span>
                    </div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">Knocked Boxes</div>
                    <div class="stat-value-large stat-value-yellow">{{ knockedBoxes }}</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">Collisions</div>
                    <div class="stat-value-large stat-value-red">{{ collisions }}</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">Top Speed</div>
                    <div class="stat-value stat-value-green">{{ maxSpeed.toFixed(1) }} km/h</div>
                </div>
            </div>
            <div class="controls">
                <h3 style="color: #a78bfa;">Info</h3>
                <div>🏁 Press W to start</div>
                <div>⏱️ Time starts with first gas</div>
                <div>🎯 Knock down all 5 boxes</div>
                <div>💥 Avoid collisions with towers</div>
                <div>🏎️ Reach top speed</div>
            </div>
        </div>
    `,
    props: {
        speed: Number,
        position: Object,
        rotation: Number,
        direction: String,
        collisions: Number,
        knockedBoxes: Number,
        maxSpeed: Number,
        raceTime: Number,
        isRacing: Boolean,
        isTouchDevice: Boolean
    },
    data() {
        return {
            debugVisible: false,
            isHidden: true // Start hidden with display: none
        };
    },
    mounted() {
        // Add debug toggle with F12 key
        window.addEventListener('keydown', this.handleGlobalKeydown);
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.handleGlobalKeydown);
    },
    watch: {
        // Watchers removed - system working stable
    },
    methods: {
        handleGlobalKeydown(e) {
            if (e.key === 'F12' || e.key === '`') {
                e.preventDefault();
                if (this.debugVisible) {
                    this.hideDebugPanels();
                } else {
                    this.toggleDebugPanels();
                }
            }
        },
        toggleDebugPanels() {
            // Remove display: none first, then start slide animation
            this.isHidden = false;
            this.$nextTick(() => {
                this.debugVisible = true;
            });
        },
        hideDebugPanels() {
            // Start slide-out animation first
            this.debugVisible = false;
            // Add display: none after animation completes (400ms)
            setTimeout(() => {
                if (!this.debugVisible) { // Only hide if still closed
                    this.isHidden = true;
                }
            }, 400);
        }
    }
};

// ES6 Module Export (replaces the old export logic)