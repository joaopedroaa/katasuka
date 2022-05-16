
search(){
    if wget --spider "$1" 2>/dev/null; then
        echo "OK   - $1"
    else
        echo "ERRO - ${1}"
    fi
}


ANIMENAME=$1

search https://lightspeedst.net/s1/mp4/$ANIMENAME/sd/1.mp4
search https://lightspeedst.net/s2/mp4/$ANIMENAME/sd/1.mp4
search https://lightspeedst.net/s3/mp4/$ANIMENAME/sd/1.mp4
search https://lightspeedst.net/s4/mp4/$ANIMENAME/sd/1.mp4
search https://lightspeedst.net/s1/mp4/$ANIMENAME/hd/1.mp4
search https://lightspeedst.net/s2/mp4/$ANIMENAME/hd/1.mp4
search https://lightspeedst.net/s3/mp4/$ANIMENAME/hd/1.mp4
search https://lightspeedst.net/s4/mp4/$ANIMENAME/hd/1.mp4
