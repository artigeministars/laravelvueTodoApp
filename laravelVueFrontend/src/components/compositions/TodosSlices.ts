export const useWrapper = (sliceGetter: () => void){
    return {
        ...sliceGetter
    }
}

