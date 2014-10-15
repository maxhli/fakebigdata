#NumberLength

class NumberLength
  def getOneLineLength(value)
    value.gsub(/\s+/, "").length
  end
  
  def getFullLength(fileName) 
    length = 0
    file = File.open(fileName, 'r')
	file.each_line { |line|
      length += getOneLineLength(line)
    }
    f.close
    
	length
  end
  
end