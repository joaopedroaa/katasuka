
searchAnime(){
    if wget --spider "$1" 2>/dev/null; then
        echo "OK   - $1"
    else
        echo "ERRO - ${1}"
    fi
}

searchManga(){
    content=$(wget -O- $1 2>&1)

    if [[ $content == *"Mangás"* ]]; then
        echo "OK     - $1"
    else
        echo "ERRO   - $1"
        return 1
    fi

}


# ANIMENAME=$1
# searchAnime https://lightspeedst.net/s1/mp4/$ANIMENAME/sd/1.mp4
# searchAnime https://lightspeedst.net/s2/mp4/$ANIMENAME/sd/1.mp4
# searchAnime https://lightspeedst.net/s3/mp4/$ANIMENAME/sd/1.mp4
# searchAnime https://lightspeedst.net/s4/mp4/$ANIMENAME/sd/1.mp4
# searchAnime https://lightspeedst.net/s1/mp4/$ANIMENAME/hd/1.mp4
# searchAnime https://lightspeedst.net/s2/mp4/$ANIMENAME/hd/1.mp4
# searchAnime https://lightspeedst.net/s3/mp4/$ANIMENAME/hd/1.mp4
# searchAnime https://lightspeedst.net/s4/mp4/$ANIMENAME/hd/1.mp4


# searchManga https://unionleitor.top/leitor/$ANIMENAME/01


searchManga https://unionleitor.top/leitor/Vagabond/01
searchManga https://unionleitor.top/leitor/Vagadwdbond/01
