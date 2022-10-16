import { onMounted, onUnmounted, ref } from "vue"

export function useMouse() {
    const x = ref(0)
    const y = ref(0)
  
    function update(event : MouseEvent) : void {
        x.value = event.pageX;
        y.value = event.pageY;  
    }

    onMounted(() => window.addEventListener('mousemove', update));
    onUnmounted(() => window.removeEventListener('mousemove', update));
  
    return { x, y }
  }