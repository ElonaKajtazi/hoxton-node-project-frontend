export function Main(){
    return (
        const [books, setBooks] = useState<Product[]>([]);

        function getDatafromServer() {
          fetch("http://localhost:3001/products")
            .then((resp) => resp.json())
            .then((data) => setProducts(data));
        }
      
        useEffect(() => {
          getDatafromServer();
        }, []);
    )
}